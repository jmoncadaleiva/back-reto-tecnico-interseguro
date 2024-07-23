import { UserEntity } from "./user.entity";

export interface UserRepository {
    registerUser(user: UserEntity): Promise<UserEntity | null>;
    findUserByEmail(email: string): UserEntity | null;
    getMyUser(uuid: string): UserEntity | null;
}