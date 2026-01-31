import axios from "axios";
import env from "../config/env";

const tmdbClient = axios.create({
  baseURL: env.movie.tmdbBaseUrl!,
  params: {
    api_key: env.movie.tmdbKey!,
    language: "en-US",
  },
  headers: {
    "Content-Type": "application/json",
  }
})

export default tmdbClient