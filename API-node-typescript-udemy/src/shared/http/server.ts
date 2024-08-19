import express, { Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import 'dotenv/config';
import { routes } from './routes';
import { AppError } from './error/appError';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'Error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });

    next();
  },
);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} ✨`);
});
