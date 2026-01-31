import type { NextFunction, Request, Response } from "express";
import env from "../config/env";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err: Error, req: Request, res: Response) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err.message,
    stack: env.nodeEnv === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };