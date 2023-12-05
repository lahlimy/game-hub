import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ab0add8131074566a52ab93e5459b359",
  },
});
