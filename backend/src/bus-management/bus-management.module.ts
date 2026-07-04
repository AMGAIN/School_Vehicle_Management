import { Module } from '@nestjs/common';
import { BusManagementService } from './bus-management.service';
import { BusManagementController } from './bus-management.controller';

@Module({
  controllers: [BusManagementController],
  providers: [BusManagementService],
})
export class BusManagementModule {}
