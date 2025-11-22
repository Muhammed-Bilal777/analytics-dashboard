import React from "react";
import "./DataTable.css";

export default function DataTable({
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
                cells: columns.map((col) =>
                  renderCell({
                    row,
                    column: col,
                    value: row[col.key],
                  })
                ),
              })
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
