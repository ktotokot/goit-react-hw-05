import s from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovie } from "../../services/movies-api";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location?.state ?? "/movie");
  const [releaseYear, setReleaseYear] = useState("");
  const [movieRating, setMovieRating] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchMovie(movieId);
        setMovie(data);
        if (data.release_date) {
          setReleaseYear(data.release_date.split("-")[0]);
        }

        if (data.vote_average) {
          const percent = Math.round((data.vote_average / 10) * 100);
          setMovieRating(percent);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <Error />;
  }

  const genreName = movie.genres.map((genre) => genre.name).join(", ");

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error />}
      <Link to={goBack.current}>Go back</Link>
      {!isLoading && !error && (
        <div className={s.moviesCard}>
          <img
            className={s.movieImg}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <div className={s.moviesInfo}>
            <h2>
              {movie.title} ({releaseYear})
            </h2>
            <p>User Score: {movieRating}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{genreName}</p>
            <p>{movie.genre_ids}</p>
          </div>
        </div>
      )}

      {!isLoading && !error && (
        <div>
          <nav>
            <NavLink to="cast">MovieCast</NavLink>
            <NavLink to="reviews">MovieReviews</NavLink>
          </nav>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
