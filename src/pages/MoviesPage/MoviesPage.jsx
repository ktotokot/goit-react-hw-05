import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { fetchMoviesByQuery } from "../../services/movies-api";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();

  const query = searchParams.get("query");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.movie.value.trim();
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMoviesByQuery(query);
        setMoviesList(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <div>
        {isLoading && <Loader />}
        {error && <Error />}
        {!moviesList && <p>Such no results</p>}
        {moviesList && (
          <MovieList movies={moviesList} state={{ from: location }} />
        )}
      </div>
    </>
  );
};

export default MoviesPage;
