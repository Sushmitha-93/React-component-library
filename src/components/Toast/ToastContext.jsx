import Toast from "./Toast";
import React, { useState, createContext, useCallback } from "react";
import "./toast.css";

export const ToastContext = createContext();

const VALID_POSITIONS = [
  "top-right",
  "top-left",
  "bottom-right",
  "bottom-left",
  "top-center",
  "bottom-center",
];

export const ToastProvider = ({ defaultPosition = "top-right", children }) => {
  // List of toasts
  const [toasts, setToasts] = useState([]);

  // Function to add a toast to the list
  const addToast = useCallback(
    ({
      message,
      dismissible = true,
      duration = 2000,
      position = defaultPosition,
      ...rest
    }) => {
      const id = Date.now();
      setToasts((prev) => [
        ...prev,
        { id, message, dismissible, duration, position, ...rest },
      ]);

      if (duration > 0) {
        setTimeout(() => removeToast(id), duration);
      }
    },
    [defaultPosition]
  );

  // Function to remove a toast from the list
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      {/* Renders toasts present in the list */}
      {VALID_POSITIONS.map((pos) => (
        <div key={pos} className={`toast-container toast-${pos}`}>
          {toasts
            .filter((toast) => toast.position === pos)
            .map(({ id, message, ...rest }) => (
              <Toast key={id} {...rest} onClose={() => removeToast(id)}>
                {message}
              </Toast>
            ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
};
