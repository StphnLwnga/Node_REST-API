import {DefaultCrudRepository} from '@loopback/repository';
import {UserRole, UserRoleRelations} from '../models';
import {NodeDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRoleRepository extends DefaultCrudRepository<
  UserRole,
  typeof UserRole.prototype.id,
  UserRoleRelations
> {
  constructor(
    @inject('datasources.node_db') dataSource: NodeDbDataSource,
  ) {
    super(UserRole, dataSource);
  }
}
