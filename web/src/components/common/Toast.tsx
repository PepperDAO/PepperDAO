import { useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

type iconType =
  | 'Audio'
  | 'BallTriangle'
  | 'Bars'
  | 'Circles'
  | 'Grid'
  | 'Hearts'
  | 'Oval'
  | 'Puff'
  | 'Rings'
  | 'TailSpin'
  | 'ThreeDots'
  | 'Watch'
  | 'RevolvingDot'
  | 'Triangle'
  | 'Plane'
  | 'MutatingDots'
  | 'CradleLoader'

export function ToastView({
  message,
  visible,
  icon,
}: {
  message: string
  visible: boolean
  icon: iconType
}) {

  return (
    <ToastContainer position="bottom-center">
      <Toast
        animation={true}
        bg="light"
        show={visible}
      >
        <Toast.Body className="text-center text-dark">
          {' '}
          <Loader
            type={icon}
            color="blue"
            height={50}
            width={50}
          />{' '}
          {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}
