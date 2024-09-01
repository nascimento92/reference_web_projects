import { RoleRepository } from '@roles/repositories/roleRepository';
import { ListRolesUseCase } from './listRolesUseCase';
import { ListRolesController } from './listRolesController';

const roleRepository = RoleRepository.getInstance();
const listRolesUseCase = new ListRolesUseCase(roleRepository);
export const listRolesController = new ListRolesController(listRolesUseCase);
