"use client";

import { Pagination } from "@nextui-org/react";

const PaginationControl = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  return (
    <>
      <Pagination
        size="lg"
        variant="bordered"
        color="secondary"
        total={lastPage}
        page={page}
        onChange={(value) => {
          scrollTop();
          setPage(value);
        }}
      />
    </>
  );
};

export default PaginationControl;
