import { UserUserCase } from "../../application/userUserCase";
import { Request, Response } from "express";

export class AuthController {
    constructor(private userUseCase: UserUserCase) {}

    public register = async ({ body }: Request, res: Response) => {
        const user = await this.userUseCase.registerUser(body)   
        res.send(user)
    }

    public login = async ({ body }: Request, res: Response) => {
        try {
            const token = await this.userUseCase.loginUser(body)
            res.status(200).json({token})
        } catch (error: any) { 
            res.status(404).json({ error: error.message})
        }
    }

    public me = async (req: Request, res: Response) => {
        if (!req.user) {
            res.status(401).json({ message: "User not authenticated" });
            return;
        }
        try {
            const user = await this.userUseCase.getMyUser(req.user.uuid)
            res.status(200).json(user)
        } catch (error: any) { 
            res.status(404).json({ error: error.message})
        }
    }
}