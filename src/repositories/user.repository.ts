import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {NodeDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.node_db') dataSource: NodeDbDataSource,
  ) {
    super(User, dataSource);
  }
}
