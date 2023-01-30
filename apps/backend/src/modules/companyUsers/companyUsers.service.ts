import { AuthService } from "@auth";
import authConfig from "@auth/config/auth.config";
import { PrismaService, UserOtpCodeService } from "@database";
import { MailUtilsService } from "@mail-utils";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { KeypairService } from "@shared";
import generalConfig from "@shared/config/general.config";


@Injectable()
export class CompanyUsersService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
        @Inject(authConfig.KEY)
        private readonly authCfg: ConfigType<typeof authConfig>,
        private readonly prismaService: PrismaService,
        private readonly companyUserService: CompanyUsersService,
        private readonly keypairService: KeypairService,
        private readonly authService: AuthService,
        private readonly userOtpCodeService: UserOtpCodeService,
        private readonly mailUtilsService: MailUtilsService,
    ) {}

    

}
