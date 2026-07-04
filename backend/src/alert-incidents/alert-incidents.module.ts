import { Module } from '@nestjs/common';
import { AlertIncidentsService } from './alert-incidents.service';
import { AlertIncidentsController } from './alert-incidents.controller';

@Module({
  controllers: [AlertIncidentsController],
  providers: [AlertIncidentsService],
})
export class AlertIncidentsModule {}
