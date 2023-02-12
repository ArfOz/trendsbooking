import ResponseMessage from '@shared/enums/response-message.json';
import { WorkerService } from '@database';
import { Injectable } from '@nestjs/common';
import { UserParamsDto } from '../users/dtos';
import { WorkersAddJsonDto, WorkersGetJsonDto } from './dtos/workers.dto';

@Injectable()
export class WorkersService {
    constructor(private readonly workerService: WorkerService) {}

    async getDetails(user: UserParamsDto, workerId: number) {
        console.log(user, workerId);

        const data = await this.workerService.get({
            Id:workerId
        });
        return {
            Success: true,
            Data: data,
        };
    }

    async add(user: UserParamsDto, input: WorkersAddJsonDto) {
        console.log(user, input);

        // if (!input.Salon || !input.ServiceType || !input.Workers) {
        //     throw new BadRequestException(
        //         BadRequestExceptionType.BAD_REQUEST,
        //         new Error(ResponseMessage.TR426),
        //         426,
        //     );
        // }

        // const data: Prisma.DepartmentCreateInput = {
        //     Workers: {
        //         create: {
        //             FirstName: input.Workers.FirstName,
        //             LastName: input.Workers.LastName,
        //             Phone: input.Workers.Phone,
        //         },
        //     },
        //     Salon: input.Salon,
        //     ServiceType: input.ServiceType,
        //     CompanyUser: { connect: { Id: user.Id } },
        // };

        // await this.departmentService.create(data);

        return {
            Data: ResponseMessage.TR204,
            Success: true,
        };
    }
}
