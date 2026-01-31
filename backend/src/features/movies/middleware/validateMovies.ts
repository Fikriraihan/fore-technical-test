import type { NextFunction, Request, Response } from "express";

export const validateMovies = (req: Request, res: Response, next: NextFunction) => {
  const { page } = req.query;
  if (page !== undefined) {
    const pageNumber = Number(page);

    if (Number.isNaN(pageNumber)) {
      return res.status(400).json({ message: "Invalid page number" });
    }
  }
  next();
};

export const validateSearchMovies = (req: Request, res: Response, next: NextFunction) => {
  const { query } = req.query;
  if (query !== undefined || typeof query !== "string") {
      return res.status(400).json({ message: "Invalid query" });
  }
  next();
};

export const validateMovieDetail = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id !== undefined || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid id" });
  }
  next();
};