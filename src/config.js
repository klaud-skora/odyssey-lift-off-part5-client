export const API_URL =
  process.env.REACT_APP_ENV === "production"
    ? "https://catstronauts-server-klaudia.herokuapp.com/"
    : "http://localhost:4000";
