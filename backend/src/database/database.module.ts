import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                database: configService.get('DB_NAME'),
                username: configService.get('DB_USER'),
                password: configService.get('DB_PASSWORD'),
                port: configService.get('DB_PORT'),
                entities: [
                    __dirname + '/../**/*.entity.ts',
                ],
                synchronize: configService.get('NODE_ENV') === 'dev'
            })
        })
    ]
})

export class DatabaseModule { }