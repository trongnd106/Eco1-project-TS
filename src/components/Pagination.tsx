import { Link } from "react-router-dom";
type Props = {
  totalPage: number;
  page: number;
};
const Pagination = ({ totalPage, page }: Props) => {
  return (
    <div aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm ">
        <li>
          {page === 1 ? (
            <span className="flex items-center justify-center opacity-50 cursor-not-allowed px-3 h-8 ms-0 leading-tight bg-white border border-e-0 rounded-s-lg dark:bg-white/20 dark:border-gray-700">
              Previous
            </span>
          ) : (
            <Link
              to={`?page=${page - 1}`}
              className="flex items-center justify-center hover:bg-gray-300 cursor-pointer px-3 h-8 ms-0 leading-tight bg-white border border-e-0 border-gray-300 rounded-s-lg dark:bg-white dark:border-gray-700"
            >
              Previous
            </Link>
          )}
        </li>
        {Array(totalPage)
          .fill(0)
          .map((_, index) => {
            const pageNumber = index + 1;
            const isActive = page === pageNumber;
            return (
              <li key={index}>
                <Link
                  to={`?page=${pageNumber}`}
                  className={`flex items-center justify-center px-3 h-8 leading-tight hover:bg-gray-300 border border-gray-700 ${
                    isActive && "bg-gray-300"
                  }`}
                >
                  {pageNumber}
                </Link>
              </li>
            );
          })}
        <li>
          {page === totalPage ? (
            <span className="cursor-not-allowed flex items-center opacity-50 justify-center px-3 h-8 ms-0 leading-tight bg-white border border-gray-300 rounded-e-md dark:bg-white dark:border-gray-700">
              Next
            </span>
          ) : (
            <Link
              to={`?page=${page + 1 === totalPage ? totalPage : page + 1}`}
              className={`cursor-no-drop ${
                page !== totalPage && "hover:bg-gray-300 cursor-pointer"
              } flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-white border border-gray-300 rounded-e-md dark:bg-white dark:border-gray-700`}
            >
              Next
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
