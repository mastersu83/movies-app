import React, { ChangeEvent, useEffect, useState } from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/logo.png";
import loading from "../../assets/loading.gif";
import { useLazyGetGenresQuery } from "../../store/api/moviesApi";
import { setMovies } from "../../store/slices/moviesSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import { useDebounce } from "use-debounce";

const Header = () => {
  const dispatch = useAppDispatch();

  const [sort, setSort] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [order, setOrder] = useState<string>("");
  const [inputValue] = useDebounce(query, 1000);

  const [sortGenre, { data, isFetching }] = useLazyGetGenresQuery();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };
  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    data && dispatch(setMovies(data.movies));
  }, [data]);

  useEffect(() => {
    sortGenre({
      genre: "",
      page: 1,
      sort_by: sort,
      query_term: inputValue,
      order_by: order,
    });
  }, [sort, inputValue, order]);

  return (
    <header className={classes.header}>
      <a href="/" className={classes.header__logo}>
        <img src={logo} alt="" />
        <p className={classes.header__logoText}>box</p>
      </a>
      <div className={classes.header__sort}>
        <span>Sort:</span>
        <select onChange={handleSort} className={classes.header__sortSelect}>
          <option value="">Date Added</option>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div className={classes.header__order}>
        <span>Order:</span>
        <select onChange={handleOrder} className={classes.header__orderSelect}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <div className={classes.header__search}>
        <input onChange={onInputChange} type="text" value={query} />
        {isFetching && (
          <img src={loading} alt="" className={classes.header__loading} />
        )}
      </div>
    </header>
  );
};

export default Header;
