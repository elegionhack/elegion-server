import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongoDbModule } from '../mongo-db/mongo-db.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [MongoDbModule],
})
export class UserModule {}
