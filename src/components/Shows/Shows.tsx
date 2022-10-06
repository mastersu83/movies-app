import React, { useEffect, useState } from "react";
import classes from "./Shows.module.scss";
import { Category } from "../Category/Category";
import { Movies } from "../Movies/Movies";
import { IResponseMovies } from "../../types/types";
import { useLazyGetGenresQuery } from "../../store/api/moviesApi";
import { Paginate } from "../Paginnate/Paginate";

const Shows = () => {
  const [movies, setMovies] = useState<IResponseMovies>();
  const [currentGenre, setCurrentGenre] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);

  const [sortGenre, { data }] = useLazyGetGenresQuery();

  const handleGetGenres = (genre: string) => {
    setCurrentGenre(genre);
    setPage(0);
  };

  const handlePageClick = (e: { selected: number }) => {
    setPage(e.selected + 1);
  };

  const handlePreviousOrNext = (flag: boolean) => {
    if (page !== 0 && page !== 1 && page !== Math.round(pageCount)) {
      setPage(!flag ? page + 1 : page - 1);
    }
  };

  useEffect(() => {
    data && setMovies(data);
    setPageCount(data ? data?.data.movie_count / 20 : 1);
  }, [data]);

  useEffect(() => {
    sortGenre({ genre: currentGenre, page });
  }, [page, currentGenre]);
  return (
    <>
      <div className={classes.shows}>
        <Category handleGetGenres={handleGetGenres} />
        <Movies movies={movies ? movies.data.movies : []} />
      </div>
      <Paginate
        pageCount={pageCount}
        handlePreviousOrNext={handlePreviousOrNext}
        handlePageClick={handlePageClick}
        page={page}
      />
    </>
  );
};

export default Shows;
