"use client";
import {
  createContext,
  useEffect,
  useContext,
  useState,
  useCallback,
} from "react";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [campaignTitle, setCampaignTitle] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPaymentModal = useCallback((content) => {
    setCampaignTitle(content);
    setIsOpen(true);
  }, []);

  const closePaymentModal = useCallback(() => {
    setIsOpen(false);
    setCampaignTitle(null);
  }, []);

  //   useEffect(() => {
  //     document.body.style.overflow = isOpen ? "hidden" : "unset";
  //   }, [isOpen]);

  return (
    <PaymentContext.Provider
      value={{ isOpen, campaignTitle, openPaymentModal, closePaymentModal }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentModal = () => useContext(PaymentContext);
