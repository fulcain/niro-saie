"use client";
import { documents } from "@/data/documents";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import Document from "@/components/Document";
import { PageClickEvent } from "react-paginate";

const PaginatedItems = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = documents.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(documents.length / itemsPerPage);

  const handlePageClick = (event: PageClickEvent) => {
    const newOffset = (event.selected * itemsPerPage) % documents.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div id="documents-list" className="flex flex-wrap justify-center gap-10">
        {currentItems.length >= 1 ? (
          currentItems.map((item, idx) => (
            <Document
              key={idx}
              title={item.title}
              description={item.description}
              downloadLink={item.downloadLink}
              date={item.date}
            />
          ))
        ) : (
          <span className="text-yellow-500 font-bold">جزوه ای وجود ندارد</span>
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="previous-item"
        previousLinkClassName="previous-link"
        nextClassName="next-item"
        nextLinkClassName="next-link"
        activeClassName="active"
        disabledClassName="disabled"
      />
    </>
  );
};

export default PaginatedItems;
