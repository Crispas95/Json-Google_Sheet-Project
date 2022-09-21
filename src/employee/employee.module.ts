import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports : [ConfigModule.forRoot()]

})
export class EmployeeModule {}
