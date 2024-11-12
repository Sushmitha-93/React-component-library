import React from "react";
import "./alert.css";
import { IoWarning, IoCloseCircleOutline } from "react-icons/io5";
import { FaCircleInfo, FaRegCircleCheck } from "react-icons/fa6";

const ICONS = {
  success: <FaRegCircleCheck className="alert-icon" />,
  error: <IoCloseCircleOutline className="alert-icon" />,
  warning: <IoWarning className="alert-icon" />,
  info: <FaCircleInfo className="alert-icon" />,
};

export default function Alert({ children, severity = "info", icon, ...rest }) {
  const renderIcon = null || icon || ICONS[severity];

  return (
    <>
      <div className={`alert alert-${severity}`} {...rest}>
        {icon == false ? null : renderIcon}
        <div className="alert-content">{children}</div>
      </div>
    </>
  );
}
