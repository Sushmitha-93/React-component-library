import React from "react";
import "./badge.css";

export default function Badge({
  children,
  color = "gray",
  pill = false,
  ...rest
}) {
  return (
    <>
      <span
        className={`badge badge-${color} ${pill ? "badge-pill" : ""}`}
        {...rest}
      >
        {children}
      </span>
    </>
  );
}
