import { Request, Response, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const routeRoles = Router();

const roles = [];

routeRoles.post('/', (request: Request, response: Response) => {
  const { name } = request.body;
  const role = {
    id: uuidv4(),
    name,
    created_at: new Date(),
  };
  roles.push(role);
  response.status(201).json({ message: 'role created', ...role });
});

export { routeRoles };
