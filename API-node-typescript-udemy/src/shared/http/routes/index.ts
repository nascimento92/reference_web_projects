import { Router, Request, Response } from 'express';
const routes = Router();
import { routeRoles } from '@roles/http/routes/rolesRoute';

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Olá dev' });
});

routes.use('/roles', routeRoles);

export { routes };
