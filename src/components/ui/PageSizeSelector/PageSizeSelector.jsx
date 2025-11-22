import React from "react";
import "./PageSizeSelector.css";

export default function PageSizeSelector({ pageSize, onChange }) {
  return (
    <div className="page-size-container">
      <label>Rows per page:</label>

      <select
        className="page-size-select"
        value={pageSize}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
}
