export interface UserEntity {
    uuid: string;
    email: string;
    password: string;
}

declare global {
    namespace Express {
        interface Request {
        user?: {
            uuid: string;
            email: string;
        };
        }
    }
}