import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { PostModule } from './core/post/post.module';
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
    CommonModule,
    UserModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
