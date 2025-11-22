import React from "react";
import "./Input.css";

export default function Input({
  label,
  value,
  onChange,
  placeholder = "",
  error = "",
}) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}

      <input
        className={`input-field ${error ? "input-error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      {error && <p className="input-error-msg">{error}</p>}
    </div>
  );
}
