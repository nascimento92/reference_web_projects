import { RoleRepository } from '@roles/repositories/roleRepository';
import { Request, Response, Router } from 'express';

const routeRoles = Router();
const rolesRepository = new RoleRepository();

routeRoles.post('/', (request: Request, response: Response) => {
  const { name } = request.body;
  const role = rolesRepository.create({ name });

  response.status(201).json({ role });
});

export { routeRoles };
