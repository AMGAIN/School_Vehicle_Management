import { Controller, Get } from '@nestjs/common';
import { AlertIncidentsService } from './alert-incidents.service';

@Controller('alert-incidents')
export class AlertIncidentsController {
  constructor(private readonly alertIncidentsService: AlertIncidentsService) {}

  @Get('summary')
  getAlertSummary(){
    return this.alertIncidentsService.getAlertSummary();
  }

  @Get('data')
  getIncidenceData(){
    return this.alertIncidentsService.getIncidenceData();
  }
}
