"use client";

import React, { useState } from "react";
import { usePaymentModal } from "../_contexts/PaymentContext";

export default function PaymentModal() {
  const { campaignData, closePaymentModal, isOpen } = usePaymentModal();

  const [methodSelector, setMethodSelector] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const titleStyle = "text-text text-base font-extrabold mb-1";
  const subtitleStyle = "text-sm text-subtext font-medium";

  const handleCheckout = () => {
    setCheckout(true);
  };

  const handlePrev = () => {
    setCheckout(false);
  };

  const paymentMethods = ["Crédito", "Débito", "Pix", "Boleto"];

  const handlePaymentMethod = (index: any) => {
    // console.log(paymentMethods[index]);
    setMethodSelector(!methodSelector);
    setPaymentMethod(index);
  };

  const handleCloseModal = (e: any) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      closePaymentModal();
    }
  };

  return isOpen ? (
    <div
      onClick={handleCloseModal}
      className="fixed top-0 left-0 m-auto h-lvh w-full flex justify-center items-center bg-black/10"
    >
      <div className="container flex flex-col w-[30rem] p-4">
        <div className="font-bold text-lg text-text py-4 text-center">
          {checkout
            ? `${campaignData.title} agradece sua contribuição`
            : `Contribuir com ${campaignData.title}`}
        </div>

        {checkout ? (
          <>
            <div className="flex flex-col gap-4 mx-12 my-4">
              <div className="flex justify-between">
                <div className="text-sm text-text font-semibold">Campanha</div>
                <div className={subtitleStyle}>{campaignData.title}</div>
              </div>

              <div className="flex justify-between">
                <div className="text-sm text-text font-semibold">Valor</div>
                <div className={subtitleStyle}>R${paymentAmount}</div>
              </div>

              <div className="flex justify-between">
                <div className="text-sm text-text font-semibold">
                  Metodo de pagamento
                </div>
                <div className={subtitleStyle}>
                  {paymentMethods[paymentMethod]}
                </div>
              </div>
            </div>
            <div className="bg-secondary h-[1px] w-full"></div>
            <div className="grid place-items-center">
              <img src="./websiteQRCode.png" alt="" className="h-72 my-4" />
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="">
              <div className={titleStyle}>Forma de pagamento</div>
              <div
                className={`flex flex-col rounded-xl ring-1 overflow-hidden gap-1 ${
                  !methodSelector
                    ? "ring-secondary bg-negative-space"
                    : "ring-primary bg-transparent ring-2"
                }`}
              >
                <div
                  className={`m-1 rounded-lg cursor-pointer px-3 h-[46px] text-text font-semibold text-sm flex items-center ${
                    methodSelector ? "hover:bg-primary/10" : ""
                  }`}
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
                          className={`m-1 rounded-lg cursor-pointer px-3 h-[46px] text-text font-semibold text-sm flex items-center ${
                            methodSelector ? "hover:bg-primary/10" : ""
                          }`}
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
                value={paymentAmount}
                onChange={(e: any) => setPaymentAmount(e.target.value)}
                type="number"
                className="input-1 w-full"
                placeholder="e.g. 5"
              />
            </div>
          </div>
        )}

        <div className="flex justify-between items-center p-4">
          {checkout ? (
            <button className="btn-3" onClick={handlePrev}>
              Voltar
            </button>
          ) : (
            <button className="btn-3" onClick={closePaymentModal}>
              Cancelar
            </button>
          )}
          {checkout ? (
            <button className="btn-2" onClick={closePaymentModal}>
              Concluir contribuição
            </button>
          ) : (
            <button className="btn-3" onClick={handleCheckout}>
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  ) : null;
}
