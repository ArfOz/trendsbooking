/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { ConfigService, ConfigType } from '@nestjs/config';
import generalConfig from '@shared/config/general.config';
// Swagger integration
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.enableCors();

    // app.useGlobalPipes(
    //     new ValidationPipe({
    //       whitelist: true,
    //       transform: true,
    //     }),
    //   );

    const config = new DocumentBuilder()
        .setTitle('TrendsBooking')
        .setDescription('TrendsBooking Endpoints')
        .setVersion('1.0')
        .addTag('TrendsBooking Endpoints')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    const configService = app.get(ConfigService);
    const generalCfg: ConfigType<typeof generalConfig> =
        configService.get('general');

    await app.listen(generalCfg.PORT);
    Logger.log(
        `🚀 Application is running on: http://localhost:${generalCfg.PORT}/${globalPrefix}`,
    );
    Logger.log(` This is ${process.env.node_env} environment`);
}

bootstrap();
