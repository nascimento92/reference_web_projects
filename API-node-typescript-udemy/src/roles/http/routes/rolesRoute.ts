import { Role } from '@roles/entities/role';
import { Request, Response, Router } from 'express';

const routeRoles = Router();

const roles: Role[] = [];

routeRoles.post('/', (request: Request, response: Response) => {
  const { name } = request.body;
  const role = new Role();
  Object.assign(role, {
    name,
    created_at: new Date(),
  });
  roles.push(role);
  response.status(201).json({ message: 'role created', ...role });
});

export { routeRoles };
