import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";

const MOCK_USER = {
    uuid: '123-123',
    email: 'jmoncadaleiva@gmail.com',
    password: '$2b$10$wHqC5Jmbeh.9xm8YHUxxauQCIF3mjImpSyRoygfWLBthFLgUhqZ7m',
}

const USERS: UserEntity[] = [MOCK_USER]

export class MockRepository implements UserRepository {
    async registerUser (userIn: UserEntity): Promise<UserEntity> {
        USERS.push(userIn)
        return userIn
    }

    getMyUser (uuid: string): UserEntity | null{
        const index = USERS.findIndex((user) => user.uuid === uuid)
        if (index === -1) { return null }
        return USERS[index]
    }

    findUserByEmail (email: string): UserEntity | null{
        const index = USERS.findIndex((user) => user.email === email)
        if (index === -1) { return null }
        return USERS[index]
    }
}