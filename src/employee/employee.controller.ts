import { Body, Controller, Post,Response } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(
        private employeeService : EmployeeService
    ){}

    @Post('post')
    postAll(@Body()body, @Response() res){

        res.status(201).json("Payload Received");
        return this.employeeService.postAll(body);
         
    }
    
}
