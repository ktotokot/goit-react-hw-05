import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjIzZjVkNjcxNzQ0ZGM2MmE0YmU4MzExMTM0MGQwYyIsIm5iZiI6MTczMjM1NDg3OS4yODU3NDUxLCJzdWIiOiI2NzQwZGViMDRkZmEwNmI1ZGY5MzA1ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z5KWCohf_uzW6RuR2lQlLMSVU4VJJcO2WEmXrgTxvW8";
axios.defaults.params = {
  language: "en-US",
  include_adult: false,
};

const fetchMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data.results;
};

export default fetchMovies;
