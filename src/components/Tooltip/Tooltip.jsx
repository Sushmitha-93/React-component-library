import React, { useState } from "react";
import "./tooltip.css";
import { IoClose } from "react-icons/io5";

const VALID_THEMES = [
  "dark",
  "blue",
  "pink",
  "green",
  "light",
  "blue-light",
  "pink-light",
  "green-light",
];

const Tooltip = ({
  icon,
  title,
  message = "Tooltip!",
  children,
  placement = "top",
  arrow = false,
  dismissible = false,
  delay = { show: 300, hide: 300 },
  maxWidth = "300px",
  sticky = false,
  initialVisible = false,
  theme = "dark",
}) => {
  theme = VALID_THEMES.includes(theme) ? theme : "dark";

  const [isVisible, setIsVisible] = useState(initialVisible);

  const showTooltip = () => {
    setTimeout(() => setIsVisible(true), delay.show);
  };
  const hideTooltip = () => {
    setTimeout(() => setIsVisible(sticky), delay.hide);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}

      {isVisible && (
        <div
          className={`tooltip tooltip-${placement} tooltip-theme-${theme}`}
          style={{ maxWidth: maxWidth }}
        >
          {icon && <span className="tooltip__icon">{icon}</span>}
          <div className="tooltip__content">
            {title && <span className="tooltip__title">{title}</span>}
            <span className="tooltip__message">{message}</span>
          </div>

          {(dismissible || sticky) && (
            <IoClose
              onClick={() => setIsVisible(false)}
              className="tooltip__close"
            />
          )}

          {arrow && (
            <div className={`tooltip-arrow tooltip-arrow-${placement}`} />
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
