"use client";

import React from "react";

import { usePaymentModal } from "../_contexts/PaymentContext";

export default function PaymentModal() {
  const { campaignTitle, closePaymentModal } = usePaymentModal();

  return (
    <></>
    // <div
    //   onClick={closePaymentModal}
    //   className="absolute border-2 border-red-500 top-0 left-0 m-auto h-lvh w-full grid place-items-center bg-black/10"
    // >
    //   <div className="container p-4">{campaignTitle}</div>
    // </div>
  );
}
