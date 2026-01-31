import type { NextFunction, Request, Response } from "express";
import { searchMovies } from "../use-cases/searchMovies";
import { movieDetail } from "../use-cases/movieDetail";
import { popularMovies } from "../use-cases/popularMovies";

export const getPopularMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const page = Number(req.query.page as string) || 1
    const data = await popularMovies(page)
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

export const getSearchMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query.query as string
    const page = Number(req.query.page as string) || 1
    const data = await searchMovies(query,page)
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

export const getMovieDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string
    const data = await movieDetail(id)
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}