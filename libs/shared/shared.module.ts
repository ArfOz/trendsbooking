import { Module } from '@nestjs/common';
import { KeypairModule } from './src/keypair/keypair.module';

@Module({
    imports: [KeypairModule],
    providers: [],
    exports: [],
})
export class SharedModule {}
