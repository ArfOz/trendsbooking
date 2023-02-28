import { Module } from '@nestjs/common';
import { ImageServerService } from './image-server.service';

@Module({
    providers: [ImageServerService],
})
export class ImageServerModule {}
