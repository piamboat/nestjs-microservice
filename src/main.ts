// Microservice
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://ykihgmxy:bHDLrFmm59AVzPvKV_gjhC2t9LrTDcTd@gerbil.rmq.cloudamqp.com/ykihgmxy',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.listen(() => console.log('Microservice is listening on port 8877'));
}
bootstrap();

// Monolith
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

// using tcp
// const app = await NestFactory.createMicroservice(AppModule, {
//   transport: Transport.TCP,
//   options: {
//     host: '127.0.0.1',
//     port: 8877,
//   },
// });
// app.listen(() => console.log('Microservice is listening on port 8877'));
