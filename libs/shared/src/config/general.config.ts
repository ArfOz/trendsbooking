import { registerAs } from '@nestjs/config';

export default registerAs('general', () => ({
    // Development veya prod olacak eklenmedi
    // NODE_ENV: process.env.NODE_ENV,
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
    nonce: process.env.NONCE,
    // Eklenecek
    PORT: process.env.PORT ?? 8080,
}));
