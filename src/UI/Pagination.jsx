import { useSearchParams, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage = 1, totalPages = 1 }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Update URL with new page number
  const handlePageChange = (newPage) => {
    searchParams.set('page', newPage);
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8 mb-12">
      {/* Previous Button - hidden on page 1 */}
      {currentPage > 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex items-center gap-2 bg-dark-card hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <FaChevronLeft />
          Previous
        </button>
      )}

      {/* Current Page Indicator */}
      <span className="text-white px-4 py-2">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button - hidden on last page */}
      {currentPage < totalPages && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="flex items-center gap-2 bg-dark-card hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Next
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
