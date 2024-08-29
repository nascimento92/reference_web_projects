import { RoleRepository } from '@roles/repositories/roleRepository';
import { createRoleController } from '@roles/useCases/createRole';

import { Request, Response, Router } from 'express';

const routeRoles = Router();
const rolesRepository = new RoleRepository();

routeRoles.post('/', (request: Request, response: Response) => {
  return createRoleController.handle(request, response);
});

routeRoles.get('/', (request: Request, response: Response) => {
  const role = rolesRepository.findAll();

  return response.status(200).json({ role });
});

routeRoles.get('/:name', (request: Request, response: Response) => {
  const { name } = request.params;
  const role = rolesRepository.findByName(name);

  return response.status(200).json({ role });
});

export { routeRoles };
