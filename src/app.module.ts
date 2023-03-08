import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './core/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV + '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      async useFactory() {
        return {
          type: 'postgres',
          host: process.env.PORTGRES_HOST,
          port: +process.env.POSTGRES_PORT,
          database: process.env.POSTGRES_DB,
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
          synchronize: true,
          autoLoadEntities: true,
        }
      }
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
