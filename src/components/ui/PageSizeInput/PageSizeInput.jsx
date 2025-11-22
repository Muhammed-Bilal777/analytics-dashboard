import React from "react";
import "./PageSizeInput.css";

export default function PageSizeInput({ pageSize, onChange }) {
  function handleChange(e) {
    const value = Number(e.target.value);

    if (!onChange) return; // SAFETY CHECK

    if (value < 1 || value > 999) return;

    onChange(value);
  }

  return (
    <div className="page-size-input-container">
      <label>Custom Limit:</label>

      <input
        type="number"
        className="page-size-number"
        min={1}
        max={999}
        value={pageSize}
        onChange={handleChange}
      />
    </div>
  );
}
