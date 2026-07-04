import { Controller, Get } from '@nestjs/common';
import { ParentsService } from './parents.service';

@Controller('parents')
export class ParentsController {
  constructor(private readonly parentsService: ParentsService) {}

  @Get("data")
  getStudentData(){
    return this.parentsService.getParentData();
  }
}
