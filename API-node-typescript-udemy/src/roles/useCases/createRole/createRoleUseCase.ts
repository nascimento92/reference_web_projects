import { Role } from '@roles/entities/role';
import { RoleRepository } from '@roles/repositories/roleRepository';
import { AppError } from '@shared/http/error/appError';

type CreateRoleDTO = {
  name: string;
};

export class CreateRoleUseCase {
  constructor(private rolesRepository: RoleRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadyExists = this.rolesRepository.findByName(name);
    if (roleAlreadyExists) {
      throw new AppError('Role already exists.');
    }
    return this.rolesRepository.create({ name });
  }
}
