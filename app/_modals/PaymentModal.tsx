"use client";

import React, { useState } from "react";
import { usePaymentModal } from "../_contexts/PaymentContext";

export default function PaymentModal() {
  const { campaignTitle, closePaymentModal, isOpen } = usePaymentModal();

  const [methodSelector, setMethodSelector] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(0);

  const titleStyle = "text-text text-base font-extrabold mb-1";
  const subtitleStyle = "text-[13px] text-subtext font-medium mb-3";

  const handleCheckout = () => {
    console.log("proceed to checkout");
  };

  const paymentMethods = ["Crédito", "Débito", "Pix", "Boleto"];

  const handlePaymentMethod = (index: any) => {
    console.log(paymentMethods[index]);
    setMethodSelector(!methodSelector);
    setPaymentMethod(index);
  };

  return isOpen ? (
    <div className="fixed top-0 left-0 m-auto h-lvh w-full grid place-items-center bg-black/10">
      <div
        style={{
          height: "80vh",
        }}
        className="container flex flex-col w-[30rem] h-5/6 p-4"
      >
        <div className="">{campaignTitle}</div>

        <div className="flex flex-col gap-8">
          <div className="">
            <div className={titleStyle}>Forma de pagamento</div>
            <div className="rounded-xl ring-1 overflow-hidden ring-secondary">
              <div
                className="px-3 h-[46px] text-text font-semibold text-sm focus:ring-primary bg-negative-space focus:bg-transparent focus:ring-2 flex items-center"
                onClick={() => setMethodSelector(!methodSelector)}
              >
                {paymentMethods[paymentMethod]}
              </div>

              {methodSelector &&
                paymentMethods.map(
                  (method, index) =>
                    index !== paymentMethod && (
                      <div
                        key={index}
                        className="px-3 h-[46px] text-text font-semibold text-sm focus:ring-primary bg-negative-space focus:bg-transparent focus:ring-2 flex items-center"
                        onClick={() => handlePaymentMethod(index)}
                      >
                        {method}
                      </div>
                    )
                )}
            </div>
          </div>

          <div className="">
            <div className={titleStyle}>Valor em reais</div>
            <input
              type="number"
              className="input-1 w-full"
              placeholder="e.g. 5"
            />
          </div>
        </div>

        <div className="flex justify-between items-center p-4">
          <button className="btn-3" onClick={closePaymentModal}>
            Cancelar
          </button>
          <button className="btn-3" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
