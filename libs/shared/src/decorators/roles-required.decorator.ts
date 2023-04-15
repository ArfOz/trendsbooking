import { UserRole, WorkerRole } from '@prisma/client';
import { applyDecorators, SetMetadata } from '@nestjs/common';
import { ApiBearerAuth, ApiForbiddenResponse } from '@nestjs/swagger';

const Roles = { ...UserRole, ...WorkerRole };

export function RolesRequired(roles: (keyof typeof Roles)[]): MethodDecorator {
    return applyDecorators(
        SetMetadata('rolesRequired', roles),
        ApiBearerAuth(),
        ApiForbiddenResponse({
            description: `One Of These Roles Required: ${roles.join(', ')}`,
            schema: {
                type: 'object',
                properties: {
                    error: { type: 'boolean', example: true },
                    message: {
                        type: 'string',
                        example: 'User does not have required roles.',
                    },
                },
            },
        }),
    );
}
