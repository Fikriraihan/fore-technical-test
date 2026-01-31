import express from "express";
import { validateMovieDetail, validateMovies, validateSearchMovies } from "../middleware/validateMovies";
import { getMovieDetail, getPopularMovies, getSearchMovies } from "../controllers/movieController";

const router = express.Router();

router.get("/", validateMovies, getPopularMovies);
router.get("/search", validateMovies, validateSearchMovies, getSearchMovies);
router.post("/:id",validateMovieDetail, getMovieDetail);

export default router;