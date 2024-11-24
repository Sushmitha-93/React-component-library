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
  const [toasts, setToasts] = useState([]);

  // Function to add a toast to the list
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
        {
          id,
          message,
          dismissible,
          duration,
          position,
          transition,
          isDismissed: false,
          ...rest,
        },
      ]);

      setTimeout(() => {
        closeToast(id);
      }, duration);
    },
    [defaultPosition]
  );

  function closeToast(id) {
    // Set `isDismissed` to true for the toast getting dismissed
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, isDismissed: true } : toast
      )
    );
    // Remove after timeout to allow exit/out animation to complete
    setTimeout(() => {
      removeToast(id);
    }, 400);
  }

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  function getTransitionClassName(transition, position, isDismissed) {
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
            .map(({ id, message, transition, isDismissed, ...rest }) => (
              <Toast
                key={id}
                {...rest}
                transitionClassName={getTransitionClassName(
                  transition,
                  pos,
                  isDismissed
                )}
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
