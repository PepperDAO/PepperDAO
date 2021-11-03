import React from "react";
import { ToastView } from "./Toast";

export function Loading({message}:{message:string}) {
  return (
    <ToastView message={message} icon={'ThreeDots'} visible={true} />
  );
}
