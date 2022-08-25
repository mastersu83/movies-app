import React from "react";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import Shows from "./components/Shows/Shows";
import {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetTvQuery,
} from "./store/api/moviesApi";

function App() {
  const { data: movies } = useGetMoviesQuery({});
  const { data: tv } = useGetTvQuery({});
  const { data: genres } = useGetGenresQuery({});

  return (
    <div className="root">
      <Header />
      <main className="content">
        <SubHeader props={"hello"} />
        <Shows title="Trending Movies" movies={movies ? movies.results : []} />
        <Shows title="Trending TV Serials" tv={tv ? tv.results : []} />
        <Shows
          title="Popular Genres"
          genresKey={true}
          genres={genres ? genres.genres : []}
        />
        <Shows
          title="Popular Actors & Directors"
          actors={true}
          // data={movies ? movies.results : []}
        />
      </main>
    </div>
  );
}

export default App;
