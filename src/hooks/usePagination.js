import { useState, useMemo, useEffect } from "react";

export default function usePagination(data = [], defaultPageSize = 20) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const totalPages = Math.ceil(data.length / pageSize);

  // Whenever data or pageSize changes → reset to page 1
  useEffect(() => {
    setPage(1);
  }, [pageSize, data.length]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  function nextPage() {
    setPage((p) => Math.min(p + 1, totalPages));
  }

  function prevPage() {
    setPage((p) => Math.max(p - 1, 1));
  }

  return {
    page,
    pageSize,
    totalPages,
    paginatedData,

    // Expose functions
    nextPage,
    prevPage,
    setPage,
    setPageSize,
  };
}
