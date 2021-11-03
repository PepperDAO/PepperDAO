/* eslint-disable jsx-a11y/anchor-is-valid */

// We'll use ethers to interact with the Ethereum network and our contract
import 'web3modal' // needed to get window.ethereum

import { Header } from './common/Header'
import { Image, Container } from 'react-bootstrap'
import { Home } from './Home'
import { NoWalletDetected } from './messages/NoWalletDetected'
import { ConnectionRejectedError, useWallet } from 'use-wallet'
import { Wallet } from 'use-wallet/dist/cjs/types'
import pepper from './embeds/pepper.png'

declare const window: any

export function PepperDapp() {
  const wallet: Wallet = useWallet()

  const activate = (connector: any) => wallet.connect(connector)

  if (window!.ethereum === undefined) {
    return <NoWalletDetected />
  }

  if (wallet.error?.name)
    return (
      <p>
        <br />
        <h1>Pepper DAO</h1>
        <h4>A Team Crypto Community DAO</h4> <br />
        <br />
        <Image roundedCircle src={pepper} height={300} width={300} />
        <span>
          {wallet.error instanceof ConnectionRejectedError
            ? 'Connection error: the user rejected the activation'
            : wallet.error.name}
        </span>
        <button onClick={() => wallet.reset()}>Retry</button>
      </p>
    )

  if (wallet.status === 'connecting') {
    return (
      <p className="text-center">
        <br />
        <h1>Pepper DAO</h1>
        <h4>A Team Crypto Community DAO</h4> <br />
        <br />
        <Image roundedCircle src={pepper} height={300} width={300} />
        <span>Connecting to {wallet.connector}…</span>
        <button onClick={() => wallet.reset()}>Cancel</button>
      </p>
    )
  }

  if (wallet.status === 'connected')
    return (
      <>
      <Header
      address={wallet.account!}
      auth={wallet.status === 'connected'}
      onLogout={async () => wallet.reset()}
    /> 
     <Home account={wallet.account!}/>
    </>
     
    )
  else {
    return (
      <Container className="text-center">
        <br /> <br /> <br />
        <h1>Pepper DAO</h1>
        <h4>A Team Crypto Community DAO</h4> <br />
        <br />
        <div className="text-center">
          <Image roundedCircle src={pepper} height={300} width={300} />
          <div className="connect-buttons">
            <button className="button"  onClick={() => activate('injected')}>Login via Browser Wallet</button>
          </div>
        </div>
      </Container>
    )
  }
}
