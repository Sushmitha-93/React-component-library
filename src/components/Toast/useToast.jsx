import { useContext } from "react";
import { ToastContext } from "./ToastContext";

export default function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToastContext must be within the scope of ToastProvider"
    );
  }

  return context;
}
