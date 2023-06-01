import { Module } from '@nestjs/common';
import { KeypairModule, ImageServerModule } from './src';

@Module({
    imports: [KeypairModule, ImageServerModule],
    providers: [],
    exports: [],
})
export class SharedModule {}
