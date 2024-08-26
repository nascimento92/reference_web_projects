import { Role } from '@roles/entities/role';

type CreateRoleDTO = {
  name: string;
};

export class RoleRepository {
  private roles: Role[] = [];

  constructor() {
    this.roles = [];
  }

  create({ name }: CreateRoleDTO) {
    const role = new Role();
    Object.assign(role, {
      name,
      created_at: new Date(),
    });
    this.roles.push(role);
    return role;
  }
}
