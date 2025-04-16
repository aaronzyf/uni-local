import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import Joi from "joi";
import os from "node:os";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [() => ({
                CLUSTER: process.env.CLUSTER === 'true',
                WORKER_COUNT: parseInt(process.env.WORK_COUNT || '', 10) || os.cpus().length,
            })],
            validationSchema: Joi.object({
                CLUSTER: Joi.string().valid('true', 'false').default('false'),
                WORKER_COUNT: Joi.number().optional().allow('').empty(''),
            }),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
