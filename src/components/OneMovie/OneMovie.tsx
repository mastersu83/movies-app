import React, { useEffect } from "react";
import classes from "./OneMovie.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useLazyGetOneMovieQuery } from "../../store/api/moviesApi";

export const OneMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [oneMovies, { data }] = useLazyGetOneMovieQuery();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    id && oneMovies({ movie_id: Number(id) });
  }, [id]);

  return (
    <div className={classes.root}>
      <button onClick={goBack} className={`${classes.oneMovie__backButton}`}>
        Back
      </button>
      {data && (
        <div className={classes.oneMovie}>
          <img src={data.large_cover_image} alt={data.title} />
          <div className={classes.oneMovie__about}>
            <div className={classes.oneMovie__title}>{data.title}</div>
            <div className={classes.oneMovie__genres}>
              Genres: <span>{data.genres.map((g) => g + " ")}</span>
            </div>
            <div>
              Rating: <span>{data.rating}</span>{" "}
            </div>
            <div>
              Runtime: <span>{data.runtime}</span>
            </div>
            <div>
              Year: <span>{data.year}</span>
            </div>
            <div>
              Description: <br />
              <br />
              {data.description_full}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
