import React, { useEffect, useState } from "react";
import classes from "./Shows.module.scss";
import { Category } from "../Category/Category";
import { Movies } from "../Movies/Movies";
import { useLazyGetGenresQuery } from "../../store/api/moviesApi";
import { Paginate } from "../Paginnate/Paginate";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { setMovies } from "../../store/slices/moviesSlice";

const Shows = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.movie);

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
    if (page !== 0 && page !== 1 && page !== Math.ceil(pageCount)) {
      setPage(!flag ? page + 1 : page - 1);
    }
  };

  useEffect(() => {
    data && dispatch(setMovies(data.movies));
    setPageCount(data ? data.movie_count / 20 : 1);
  }, [data]);

  useEffect(() => {
    sortGenre({
      genre: currentGenre,
      page,
      sort_by: "",
      query_term: "",
      order_by: "",
    });
  }, [page, currentGenre]);
  return (
    <>
      <div className={classes.shows}>
        <Category handleGetGenres={handleGetGenres} />
        <Movies movies={movies ? movies : []} />
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
