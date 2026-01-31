import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useNavigate, useSearch } from "@tanstack/react-router";

interface MoviePaginationProps {
  totalPages: number;
}

export function MoviePagination({ totalPages }: MoviePaginationProps) {
  const navigate = useNavigate({ from: "/" });
  const search = useSearch({ from: '/_layout/(home)/' });

  const [currentPage, setCurrentPage] = useState(() => {
    const pageParam = search.page;
    return Number(pageParam) >= 1 && Number(pageParam) <= totalPages ? pageParam : 1;
  });

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      navigate({
        search: (prev) => ({
          ...prev,
          page: page === 1 ? undefined : page,
        }),
      });
    }
  };

  useEffect(() => {
    const pageParam = search.page;
    const page = pageParam ? Number(pageParam) : 1;
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
    }
  }, [search, totalPages, currentPage]);

  const renderPaginationItems = () => {
    const items = [];
    const showEllipsis = totalPages > 9;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem
            key={i}
            className="transition-all duration-200 ease-in-out"
          >
            <PaginationLink
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
              className={`
                transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer
                ${currentPage === i
                  ? "bg-primary text-white hover:text-white hover:bg-primary shadow-lg scale-105"
                  : "hover:bg-gray-100 hover:shadow-md text-primary"
                }
              `}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem
          key={1}
          className="transition-all duration-200 ease-in-out"
        >
          <PaginationLink
            onClick={() => handlePageChange(1)}
            isActive={currentPage === 1}
            className={`
              transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer
              ${currentPage === 1
                ? "bg-primary text-white hover:text-white hover:bg-primary shadow-lg scale-105"
                : "hover:bg-gray-100 hover:shadow-md"
              }
            `}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (Number(currentPage) > 4) {
        items.push(
          <PaginationItem key="ellipsis-start" className="animate-fade-in">
            <PaginationEllipsis className="transition-all duration-200 ease-in-out hover:scale-110" />
          </PaginationItem>
        );
      }

      const startPage = Math.max(
        2,
        Math.min(Number(currentPage) - 2, totalPages - 6)
      );
      const endPage = Math.min(
        totalPages - 1,
        Math.max(Number(currentPage) + 2, 7)
      );

      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) {
          items.push(
            <PaginationItem
              key={i}
              className="transition-all duration-200 ease-in-out animate-slide-in"
            >
              <PaginationLink
                onClick={() => handlePageChange(i)}
                isActive={currentPage === i}
                className={`
                  transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer
                  ${currentPage === i
                    ? "bg-primary text-white hover:text-white hover:bg-primary shadow-lg scale-105"
                    : "hover:bg-gray-100 hover:shadow-md"
                  }
                `}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      }

      if (Number(currentPage) < totalPages - 4) {
        items.push(
          <PaginationItem key="ellipsis-end" className="animate-fade-in">
            <PaginationEllipsis className="transition-all duration-200 ease-in-out hover:scale-110" />
          </PaginationItem>
        );
      }

      if (totalPages > 1) {
        items.push(
          <PaginationItem
            key={totalPages}
            className="transition-all duration-200 ease-in-out"
          >
            <PaginationLink
              onClick={() => handlePageChange(totalPages)}
              isActive={currentPage === totalPages}
              className={`
                transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer
                ${currentPage === totalPages
                  ? "bg-primary text-white hover:bg-primary hover:text-white shadow-lg scale-105"
                  : "hover:bg-gray-100 hover:shadow-md"
                }
              `}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    return items;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <Pagination className="transition-all duration-300 ease-in-out">
          <PaginationContent className="gap-1">
            <PaginationPrevious onClick={() => handlePageChange(Number(currentPage) - 1)} />

            <div className="flex items-center gap-1 transition-all duration-300 ease-in-out">
              {renderPaginationItems()}
            </div>
            <PaginationNext onClick={() => handlePageChange(Number(currentPage) + 1)} />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
