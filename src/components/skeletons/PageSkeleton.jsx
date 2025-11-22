import React from "react";
import "./Skeleton.css";
import TableSkeleton from "./TableSkeleton.jsx";
import ChartSkeleton from "./ChartSkeleton.jsx";

export default function PageSkeleton() {
  return (
    <>
      {/* Search */}
      <div className="skeleton" style={{ height: 40, marginBottom: 20 }} />

      {/* Filters */}
      <div style={{ display: "flex", gap: "20px", marginBottom: 20 }}>
        <div className="skeleton" style={{ height: 40, flex: 1 }} />
        <div className="skeleton" style={{ height: 40, flex: 1 }} />
        <div className="skeleton" style={{ height: 40, width: 100 }} />
      </div>

      {/* Chart */}
      <ChartSkeleton />

      {/* Table */}
      <TableSkeleton rows={8} columns={6} />
    </>
  );
}
