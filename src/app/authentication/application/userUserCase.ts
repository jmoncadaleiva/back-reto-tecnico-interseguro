import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export class UserUserCase {
    constructor (private readonly userRepository: UserRepository) {}

    public async registerUser ({email, password}: {email: string, password: string}) {
        const userValue = new UserValue({email, password});
        userValue.password = bcrypt.hashSync(userValue.password, 10);
        const userCreated = await this.userRepository.registerUser(userValue)
        return userCreated
    }

    public async loginUser ({email, password}: {email: string, password: string})  {
        const user = await this.userRepository.findUserByEmail(email)
        if (!user) {
            throw new Error('No se encontró un usuario con este email')
        }

        if (!bcrypt.compareSync(password, user.password)) {
            throw new Error('Contraseña incorrecta')
        }
        return jwt.sign({ uuid: user.uuid, email: user.email }, process.env.SECRET_KEY!);
    }

    public async getMyUser (uuid: string): Promise<UserValue | null> {
        const user = await this.userRepository.getMyUser(uuid)
        return user
    }
}