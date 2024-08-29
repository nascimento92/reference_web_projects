import { Request, Response } from 'express';
import { AppError } from '@shared/http/error/appError';
import { CreateRoleUseCase } from './createRoleUseCase';

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    const role = this.createRoleUseCase.execute({ name });
    return response.status(201).json({ role });
  }
}
