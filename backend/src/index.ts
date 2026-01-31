import dotenv from "dotenv";
dotenv.config();

import express, { urlencoded } from "express";
import env from "./config/env";
import movieRoutes from "./features/movies/routes/movieRoute";
const port = env.port || 5500;

import cors from "cors";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Server is ready"));

app.use('/api/movies', movieRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});