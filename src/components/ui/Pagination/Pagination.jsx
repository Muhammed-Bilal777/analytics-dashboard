import React from "react";
import "./Pagination.css";

export default function Pagination({
  page,
  totalPages,
  onNext,
  onPrev,
  onPageChange,
}) {
  return (
    <div className="pagination">
      <button className="pg-btn" disabled={page === 1} onClick={onPrev}>
        Prev
      </button>

      <span className="pg-info">
        Page {page} of {totalPages}
      </span>

      <button
        className="pg-btn"
        disabled={page === totalPages}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
}
