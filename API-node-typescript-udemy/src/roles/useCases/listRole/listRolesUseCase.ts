import { Role } from '@roles/entities/role';
import { RoleRepository } from '@roles/repositories/roleRepository';

export class ListRolesUseCase {
  constructor(private rolesRepository: RoleRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll();
  }
}
