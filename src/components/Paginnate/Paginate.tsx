import React, { FC } from "react";
import classes from "./Paginate.module.scss";
import ReactPaginate from "react-paginate";

interface PaginatePropsTypes {
  pageCount: number;
  handlePreviousOrNext: (flag: boolean) => void;
  handlePageClick: (e: { selected: number }) => void;
  page: number;
}

export const Paginate: FC<PaginatePropsTypes> = ({
  pageCount,
  page,
  handlePreviousOrNext,
  handlePageClick,
}) => {
  return (
    <ReactPaginate
      containerClassName={classes.paginate__pageContainer}
      pageClassName={classes.paginate__pageNumber}
      activeClassName={classes.paginate__selected}
      pageCount={pageCount}
      breakLabel="..."
      nextClassName={`${classes.paginate__previous} ${
        classes.paginate__pageNumber
      } ${page === Math.round(pageCount) ? classes.paginate__disable : ""}`}
      nextLabel={<div onClick={() => handlePreviousOrNext(false)}>Next</div>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={10}
      marginPagesDisplayed={0}
      previousClassName={`${classes.paginate__previous} ${classes.paginate__pageNumber}`}
      previousLabel={
        <div onClick={() => handlePreviousOrNext(true)}>Previous</div>
      }
      forcePage={page === 0 ? 0 : page - 1}
      disabledClassName={classes.paginate__disable}
    />
  );
};
