import React from "react";
import "./Skeleton.css";

export default function TableSkeleton({ rows = 8, columns = 6 }) {
  return (
    <div className="table-wrapper skeleton-table">
      <table className="table">
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i}>
                <div
                  className="skeleton skeleton-line"
                  style={{ width: "60%" }}
                />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, idx) => (
            <tr key={idx}>
              {Array.from({ length: columns }).map((_, cidx) => (
                <td key={cidx}>
                  <div className="skeleton skeleton-line" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
