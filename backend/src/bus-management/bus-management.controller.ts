import { Controller, Get } from '@nestjs/common';
import { BusManagementService } from './bus-management.service';

@Controller('bus-management')
export class BusManagementController {
  constructor(private readonly busManagementService: BusManagementService) {}

  @Get('data')
  getBusData(){
    return this.busManagementService.getBusData();
  }
}
