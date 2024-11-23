import Alert from "../Alert/index";
import { useEffect, useState } from "react";

const Toast = ({
  children,
  title,
  transition,
  duration,
  onClose,
  position,
  ...props
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      closeToast();
    }, duration);
  });

  function closeToast() {
    setIsDismissed(true);
    setTimeout(() => {
      onClose();
    }, 400);
  }

  function getTransitionClassName() {
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
  console.log(getTransitionClassName());

  return (
    <div className={transition && getTransitionClassName()}>
      <Alert {...props}>
        {title && <Alert.Title>{title}</Alert.Title>}
        {children}
      </Alert>
    </div>
  );
};

export default Toast;
