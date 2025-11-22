import React from "react";
import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
