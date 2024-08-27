import { RoleRepository } from '@roles/repositories/roleRepository';
import { Request, Response, Router } from 'express';

const routeRoles = Router();
const rolesRepository = new RoleRepository();

routeRoles.post('/', (request: Request, response: Response) => {
  const { name } = request.body;
  const roleAlreadyExists = rolesRepository.findByName(name);
  if (roleAlreadyExists) {
    return response.status(400).json({ error: 'Role already exists.' });
  }
  const role = rolesRepository.create({ name });

  return response.status(201).json({ role });
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
