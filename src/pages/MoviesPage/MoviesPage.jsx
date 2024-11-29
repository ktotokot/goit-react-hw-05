import css from "./MoviesPage.module.css";
import { Field, Form, Formik } from "formik";

const MoviesPage = ({ onChangeQuery }) => {
  const initialValues = { query: "" };
  const handleSubmit = (values, options) => {
    options.resetForm();
    onChangeQuery(values.query);
  };
  return (
    <header className={css.searchBarHeader}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" placeholder="Search something" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default MoviesPage;
