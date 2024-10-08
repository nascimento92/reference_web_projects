import { Request, Response } from 'express';
import { ListRolesUseCase } from './listRolesUseCase';

export class ListRolesController {
  constructor(private listRolesUseCase: ListRolesUseCase) {}

  handle(request: Request, response: Response): Response {
    const role = this.listRolesUseCase.execute();
    return response.status(200).json(role);
  }
}
