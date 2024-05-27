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
  const [campaignData, setCampaignData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPaymentModal = useCallback((content) => {
    setCampaignData(content);
    setIsOpen(true);
  }, []);

  const closePaymentModal = useCallback(() => {
    setIsOpen(false);
    setCampaignData(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <PaymentContext.Provider
      value={{ isOpen, campaignData, openPaymentModal, closePaymentModal }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentModal = () => useContext(PaymentContext);
