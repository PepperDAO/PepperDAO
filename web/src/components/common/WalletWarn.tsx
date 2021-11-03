import React from 'react'
import { Alert } from 'react-bootstrap'

export function WalletWarn({
  addr,
  trying,
  onConnectWallet,
}: {
  addr?: string
  trying: boolean
  onConnectWallet: () => Promise<void>
}) {
  React.useEffect(() => {
    const checkConnection = async () => {
      // Check if User is already connected by retrieving the accounts

      if (!addr) onConnectWallet()
      console.log('checking if connected')
    }
    checkConnection()
  }, [])

  if (!addr && !trying)
    return (
      <Alert variant="warning" className="text-center">
        You are not yet connected to a Wallet. Please click 'Connect Wallet' to
        Post, Like and Collaborate{' '}
      </Alert>
    )
  else return null;
}
