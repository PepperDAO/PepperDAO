export const AMPLIFY_CONFIG = {
  Auth: {
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_POOL_CLIENT_ID,
    authenticationFlowType: 'CUSTOM_AUTH',
  }
};

