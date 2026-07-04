import { Controller, Get } from '@nestjs/common';
import { RouteManagementService } from './route-management.service';

@Controller('route-management')
export class RouteManagementController {
  constructor(private readonly routeManagementService: RouteManagementService) {}

  @Get()
  getRouteData(){
    return this.routeManagementService.getRouteData();
  }
}
