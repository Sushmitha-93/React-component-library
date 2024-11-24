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
  const [isDismissed, setIsDismissed] = useState(false);

  // Function to add a toast to the list. (Shared via context)
  const addToast = useCallback(
    ({
      message,
      dismissible = true,
      duration = 2000,
      position = defaultPosition,
      transition = "none",
      ...rest
    }) => {
      const id = Date.now();
      setToasts((prev) => [
        ...prev,
        { id, message, dismissible, duration, position, transition, ...rest },
      ]);
      setTimeout(() => {
        closeToast(id);
      }, duration);
    },
    [defaultPosition]
  );

  function closeToast(id) {
    setIsDismissed(true);
    setTimeout(() => {
      removeToast(id);
    }, 400);
  }

  // Function to remove a toast from the list
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  function getTransitionClassName(transition, position) {
    const className = `toast-${transition}-${isDismissed ? "out" : "in"}`;
    if (transition === "slide") {
      const [ySide, xSide] = position.split("-");
      if (xSide !== "center") {
        return className + "-" + xSide;
      } else {
        return className + "-" + ySide;
      }
    }
    return className;
  }

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      {/* Renders toasts present in the list */}
      {VALID_POSITIONS.map((pos) => (
        <div key={pos} className={`toast-container toast-${pos}`}>
          {toasts
            .filter((toast) => toast.position === pos)
            .map(({ id, message, transition, ...rest }) => (
              <Toast
                key={id}
                {...rest}
                transitionClassName={getTransitionClassName(transition, pos)}
                onClose={() => removeToast(id)}
              >
                {message}
              </Toast>
            ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
};
