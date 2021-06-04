import { HttpModule, Module } from '@nestjs/common';
import { RocketController } from './rocket.controller';
import { RocketService } from './rocket.service';

@Module({
  imports: [HttpModule],
  controllers: [RocketController],
  providers: [RocketService],
})
export class RocketModule {}
