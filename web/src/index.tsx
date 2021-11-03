import React from 'react'
import ReactDOM from 'react-dom'
import { PepperDapp } from './components/PepperDapp'

// We import bootstrap here, but you can remove if you want
import './components/embeds/bootstrap.min.css'
import './components/embeds/society.css'

import { UseWalletProvider } from 'use-wallet'

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

ReactDOM.render(
  <UseWalletProvider
    connectors={{
      injected: {
        //allows you to connect and switch between mainnet and rinkeby within Metamask.
        chainId: [1, 4, 1337],
      },
      fortmatic: {
        chainId: [1],
        apiKey: '',
      },
      portis: {
        dAppId: '',
        chainId: [1],
      },
      walletconnect: {
        rpc: {
          1: 'https://mainnet.infura.io/v3/a0d8c94ba9a946daa5ee149e52fa5ff1',
          4: 'https://rinkeby.infura.io/v3/a0d8c94ba9a946daa5ee149e52fa5ff1',
        },
        bridge: 'https://bridge.walletconnect.org',
        pollingInterval: 12000,
      },
      walletlink: {
        chainId: [1],
        url: 'https://mainnet.eth.aragon.network/',
      },
    }}
  >
    {' '}
    <React.StrictMode>
      <PepperDapp />{' '}
    </React.StrictMode>
  </UseWalletProvider>,

  document.getElementById('root'),
)
