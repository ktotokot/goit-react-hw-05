import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../services/movies-api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>MovieList</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
