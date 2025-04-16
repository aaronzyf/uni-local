import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';
import cluster from 'node:cluster';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    const isClusterMode = configService.get<boolean>('CLUSTER') || false;
    const port = configService.get<number>('PORT') ?? 14425;
    const workCount = configService.get<number>('WORKER_COUNT');

    if (isClusterMode && cluster.isPrimary) {
        for (let i = 0; i < workCount; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            cluster.fork();
        });
    } else {
        await app.listen(port);
    }
}

bootstrap();
