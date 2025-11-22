import React, { useState } from "react";
import "./Dropdown.css";

export default function Dropdown({
  label,
  options = [],
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      {label && <label className="dropdown-label">{label}</label>}

      <div className="dropdown-control" onClick={() => setOpen(!open)}>
        <span>{value || "Select..."}</span>
        <span className="arrow">▼</span>
      </div>

      {open && (
        <div className="dropdown-menu">
          {options.map((opt) => (
            <div
              key={opt}
              className="dropdown-item"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
