import { NavLink, Outlet } from "react-router-dom";

const MoviesPage = () => {
  return (
    <div>
      <p>MoviesPage</p>
      <nav>
        <NavLink to="MovieDetailsPage">MovieDetailsPage</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MoviesPage;
