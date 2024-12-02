import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { fetchReviews } from "../../services/movies-api";
import Error from "../Error/Error";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchReviews(movieId);
        setReviews(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error />}
      {reviews.length === 0 && <p>There is no review yet.</p>}
      {!isLoading && !error && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>Author: {review.author}</strong>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
