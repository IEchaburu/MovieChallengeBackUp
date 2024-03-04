import "./Pagination.css"

const Pagination = ({currentPage, totalPages, onPageChange, handlePrev, handleNext}) => {
    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < totalPages;
    console.log(currentPage, totalPages, 'hola')

    return (
        <div className="container">
          <button className="button" onClick={handlePrev} disabled={!canGoPrev}>
            &lt; Prev
          </button>
          <span className="info">Page {currentPage} of {totalPages}</span>
          <button className="button" onClick={handleNext} disabled={!canGoNext}>
            Next &gt;
          </button>
        </div>
      );
};

export default Pagination