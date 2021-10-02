import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoDbModule } from './modules/mongo-db/mongo-db.module';

@Module({
  imports: [MongoDbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
