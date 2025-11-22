import React, { useState, useMemo } from "react";

import useDashboardData from "../hooks/useDashboardData.js";
import useTableLogic from "../hooks/useTableLogic.js";
import usePagination from "../hooks/usePagination.js";

import Button from "../components/ui/Button/Button.jsx";
import Dropdown from "../components/ui/Dropdown/Dropdown.jsx";
import Pagination from "../components/ui/Pagination/Pagination.jsx";

import DataTable from "../components/headless/DataTable/DataTable.jsx";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./DashboardPage.css";
import PageSizeInput from "../components/ui/PageSizeInput/PageSizeInput.jsx";
import PageSizeSelector from "../components/ui/PageSizeSelector/PageSizeSelector.jsx";

export default function DashboardPage() {
  const { data, loading } = useDashboardData();

  // Filters
  const [channelFilter, setChannelFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  // Table sorting logic
  const { sortedData, requestSort, sortConfig } = useTableLogic(data);

  // Filtering
  const filteredData = useMemo(() => {
    return sortedData.filter((row) => {
      if (channelFilter && row.channel !== channelFilter) return false;
      if (regionFilter && row.region !== regionFilter) return false;
      return true;
    });
  }, [sortedData, channelFilter, regionFilter]);

  // Pagination must come AFTER filtering
  const {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    setPageSize,
  } = usePagination(filteredData, 20);

  const columns = [
    { key: "channel", label: "Channel" },
    { key: "region", label: "Region" },
    { key: "spend", label: "Spend" },
    { key: "impressions", label: "Impressions" },
    { key: "clicks", label: "Clicks" },
    { key: "conversions", label: "Conversions" },
  ];

  return (
    <div className="page">
      <h1 className="title">Marketing Analytics Dashboard</h1>

      {/* Filters */}
      <div className="filters">
        <Dropdown
          label="Channel"
          options={["TikTok", "Pinterest", "Snapchat", "Twitter"]}
          value={channelFilter}
          onChange={setChannelFilter}
        />

        <Dropdown
          label="Region"
          options={["Europe", "Asia", "Australia", "South America"]}
          value={regionFilter}
          onChange={setRegionFilter}
        />

        <Button
          variant="secondary"
          onClick={() => {
            setChannelFilter("");
            setRegionFilter("");
          }}
        >
          Reset
        </Button>
      </div>

      {/* Chart */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData}>
            <XAxis dataKey="channel" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="conversions" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <DataTable
            data={paginatedData}
            columns={columns}
            sortConfig={sortConfig}
            onSort={requestSort}
            renderHeader={({ column, sortConfig, onSort }) => (
              <th onClick={() => onSort(column.key)}>
                {column.label}
                {sortConfig.key === column.key &&
                  (sortConfig.direction === "asc" ? " ▲" : " ▼")}
              </th>
            )}
            renderRow={({ row, cells }) => <tr key={row.id}>{cells}</tr>}
            renderCell={({ value, column }) => (
              <td key={column.key}>{value}</td>
            )}
          />

          {/* Pagination Controls */}
          <Pagination
            page={page}
            totalPages={totalPages}
            onNext={nextPage}
            onPrev={prevPage}
          />

          <div className="page-size-options">
            <PageSizeSelector pageSize={pageSize} onChange={setPageSize} />
            <PageSizeInput pageSize={pageSize} onChange={setPageSize} />
          </div>
        </>
      )}
    </div>
  );
}
