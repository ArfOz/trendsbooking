import { registerAs } from '@nestjs/config';

export default registerAs('general', () => ({
    node_env: process.env.NODE_ENV,
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
    nonce: process.env.NONCE,
    PORT: process.env.PORT ?? 8080,
    apiAccessToken: process.env.ACCESSTOKEN
}));
