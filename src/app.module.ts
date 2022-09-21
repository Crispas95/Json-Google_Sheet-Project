import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule],
  //controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
