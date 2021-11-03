import './App.css';
import { useEffect, useRef, useState } from 'react';
import { AMPLIFY_CONFIG } from './config';
import Amplify, { Auth } from 'aws-amplify';
import MetaMaskOnboarding from '@metamask/onboarding';

Amplify.configure(AMPLIFY_CONFIG);

function Authenticator() {
  const [user, setUser] = useState(null);
  const onboarding = useRef();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  const onSignIn = async () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        const address = accounts[0];
        const cognitoUser = await handleAmplifySignIn(address);
        const messageToSign = cognitoUser.challengeParam.message;
        const signature = await window.ethereum.request({
          method: 'personal_sign',
          params: [address, messageToSign],
        });
        await Auth.sendCustomChallengeAnswer(cognitoUser, signature);
        await checkUser();
      }
    } else {
      onboarding.current.startOnboarding();
    }
  };

  const handleAmplifySignIn = async address => {
    try {
      const cognitoUser = await Auth.signIn(address);
      return cognitoUser;
    } catch (err) {
      /*Cognito doesn't give us a lot of flexibility on error responses
      so we'll have to string match our 'User Not Found' error here
      and create a cognito user if they don't exist*/
      if (err && err.message && err.message.includes('[404]')) {
        const params = {
          username: address,
          password: getRandomString(30),
        };
        await Auth.signUp(params);
        return handleAmplifySignIn(address);
      }
    }
  };

  const getRandomString = bytes => {
    const randomValues = new Uint8Array(bytes);
    window.crypto.getRandomValues(randomValues);
    return Array.from(randomValues).map(intToHex).join('');
  };

  const intToHex = nr => {
    return nr.toString(16).padStart(2, '0');
  };

  const onSignOut = async () => {
    try {
      await Auth.signOut();
      await checkUser();
    } catch (err) {
      console.error('onSignOut error: ', err);
    }
  };

  const checkUser = async () => {
    try {
      const _user = await Auth.currentAuthenticatedUser();

      setUser(_user);

      console.log('got user', _user);
    } catch (err) {
      setUser(null);
      console.error('checkUser error', err);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
   <>
        {!user && <button onClick={onSignIn}>Connect Wallet</button>}

        {user && (
          <div>
            <button onClick={onSignOut}>Sign Out</button>
            <p>Current User: {JSON.stringify(user.attributes.sub)}</p>
          </div>
        )}
    </>
  );
}

export default Authenticator;
