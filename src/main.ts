import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { appSetup } from './app.setup';

const port = Number(process.env.NODE_PORT) || 5001;
const host = process.env.NODE_HOST || 'localhost';

process.env.NODE_ENV = process.env.NODE_ENV || 'develop';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  appSetup(app);

  await app.listen(port, host);
}
bootstrap().then(() => {
  console.log(`Listening on http://${host}:${port}
  NODE_ENV: ${process.env.NODE_ENV}
  `);
});
