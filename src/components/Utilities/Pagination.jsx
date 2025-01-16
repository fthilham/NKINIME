import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((prevState) => prevState + 1);
      scrollTop();
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  };

  return (
    <div className="flex justify-center items-center py-4 gap-4 text-light">
      <button
        onClick={handlePrevPage}
        className={`rounded-full px-4 py-1 transition-all bg-light text-primary hover:bg-light ${
          page === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={page === 1}
      >
        Balik
      </button>
      <p>
        {page} Sekang : {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className={`rounded-full px-3 py-1 transition-all bg-secondary text-primary hover:bg-white ${
          page === lastPage ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={page === lastPage}
      >
        Lanjut
      </button>
    </div>
  );
};

export default Pagination;
