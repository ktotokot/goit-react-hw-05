import { NavLink, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
  return (
    <div>
      <p>MovieDetailsPageMovieDetailsPage</p>
      <nav>
        <NavLink to="MovieCast">MovieCast</NavLink>
        <NavLink to="MovieReviews">MovieReviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
