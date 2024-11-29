import { NavLink, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
  return (
    <div>
      <p>MovieDetailsPage</p>
      <nav>
        <NavLink to="cast">MovieCast</NavLink>
        <NavLink to="reviews">MovieReviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
