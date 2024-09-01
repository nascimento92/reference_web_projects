import { createRoleController } from '@roles/useCases/createRole';
import { listRolesController } from '@roles/useCases/listRole';

import { Request, Response, Router } from 'express';

const routeRoles = Router();

routeRoles.post('/', (request: Request, response: Response) => {
  return createRoleController.handle(request, response);
});

routeRoles.get('/', (request: Request, response: Response) => {
  return listRolesController.handle(request, response);
});

// routeRoles.get('/:name', (request: Request, response: Response) => {
//   const { name } = request.params;
//   const role = rolesRepository.findByName(name);

//   return response.status(200).json({ role });
// });

export { routeRoles };
