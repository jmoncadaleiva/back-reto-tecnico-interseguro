import {v4 as uuid} from "uuid"
import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
    uuid: string;
    email: string;
    password: string;

    constructor({email, password}: { email: string, password: string}) {
        this.uuid = uuid();
        this.email = email;
        this.password = password;
    }
}