import React from "react";

export function SimplePagination({ totalPages, currentPage, onPageChange }) {
  const next = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center gap-8">
      <button
        onClick={prev}
        disabled={currentPage === 1}
        className="border-[1px] border-green-700 rounded text-[#161616] hover:text-[#ffffff] hover:bg-green-900 px-4 py-2 cursor-pointer ease-in-out  "
      >
        Previous
      </button>
      <span className="font-normal">
        Page <strong className="text-gray-900">{currentPage}</strong> of{" "}
        <strong className="text-gray-900">{totalPages}</strong>
      </span>
      <button
        onClick={next}
        disabled={currentPage === totalPages}
        className="border-[1px] border-green-700 rounded text-[#161616] hover:text-[#ffffff] hover:bg-green-900 px-4 py-2 cursor-pointer ease-in-out  "
      >
        Next
      </button>
    </div>
  );
}
