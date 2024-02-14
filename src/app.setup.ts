import {
  BadRequestException,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { useContainer } from 'class-validator';
import { AppModule } from './app/app.module';
import { TrimPipe } from './shared/pipes/trim.pipe';

export const appSetup = (app: INestApplication) => {
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => new BadRequestException(errors),
      validationError: {
        target: false,
        value: false,
      },
    }),
    new TrimPipe(),
  );

  // app.useWebSocketAdapter(new WsAdapter(app));

  useContainer(app.select(AppModule), {
    fallbackOnErrors: true,
  });
};
