import { RoleRepository } from '@roles/repositories/roleRepository';
import { CreateRoleUseCase } from './createRoleUseCase';
import { CreateRoleController } from './createRoleController';

const rolesRepository = new RoleRepository();
const createRoleUseCase = new CreateRoleUseCase(rolesRepository);
export const createRoleController = new CreateRoleController(createRoleUseCase);
