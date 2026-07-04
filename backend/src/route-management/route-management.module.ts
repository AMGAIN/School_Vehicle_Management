import { Module } from '@nestjs/common';
import { RouteManagementService } from './route-management.service';
import { RouteManagementController } from './route-management.controller';

@Module({
  controllers: [RouteManagementController],
  providers: [RouteManagementService],
})
export class RouteManagementModule {}
