import React from "react";
import "./DataTable.css";

import {
  formatNumber,
  formatCurrencyINR,
} from "../../../utils/formatNumbers.js";

function DataTable({
  data = [],
  columns = [],
  renderHeader,
  renderRow,
  renderCell,
  onSort,
  sortConfig,
}) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) =>
              renderHeader({
                column: col,
                sortConfig,
                onSort,
              })
            )}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="no-data">
                No Data
              </td>
            </tr>
          ) : (
            data.map((row) =>
              renderRow({
                row,

                // Format values BEFORE rendering cell
                cells: columns.map((col) => {
                  let value = row[col.key];
                  let formattedValue = value;

                  switch (col.key) {
                    case "impressions":
                    case "clicks":
                    case "conversions":
                      formattedValue = formatNumber(value); // 10.5K
                      break;

                    case "spend":
                      formattedValue = formatCurrencyINR(value); // ₹10.5K
                      break;

                    default:
                      formattedValue = value;
                  }

                  return renderCell({
                    row,
                    column: col,
                    value: formattedValue,
                  });
                }),
              })
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(DataTable);
