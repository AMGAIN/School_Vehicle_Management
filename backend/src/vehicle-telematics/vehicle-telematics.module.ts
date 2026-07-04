import { Module } from '@nestjs/common';
import { VehicleTelematicsService } from './vehicle-telematics.service';
import { VehicleTelematicsController } from './vehicle-telematics.controller';

@Module({
  controllers: [VehicleTelematicsController],
  providers: [VehicleTelematicsService],
})
export class VehicleTelematicsModule {}
