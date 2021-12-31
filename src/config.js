export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://catstronauts-server-klaudia.herokuapp.com/"
    : "http://localhost:4000";
