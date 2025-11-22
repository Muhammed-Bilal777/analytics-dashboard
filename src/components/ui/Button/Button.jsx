import React from "react";
import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  const className = `btn btn-${variant} btn-${size} ${disabled ? "btn-disabled" : ""}`;

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
