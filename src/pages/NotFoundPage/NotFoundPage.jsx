import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Page not found</p>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
    </div>
  );
};

export default NotFoundPage;
