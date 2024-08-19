import { Router, Request, Response } from 'express';
import { AppError } from '../error/appError';
const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  throw new AppError('Acesso negado');
  return response.json({ message: 'Olá dev' });
});

export { routes };
