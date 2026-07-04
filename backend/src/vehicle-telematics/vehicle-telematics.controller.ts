import { Controller } from '@nestjs/common';
import { VehicleTelematicsService } from './vehicle-telematics.service';

@Controller('vehicle-telematics')
export class VehicleTelematicsController {
  constructor(private readonly vehicleTelematicsService: VehicleTelematicsService) {}
}
