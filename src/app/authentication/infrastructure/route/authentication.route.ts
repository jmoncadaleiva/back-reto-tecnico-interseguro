import { Router } from "express";
import { MockRepository } from "../repository/mock.repository";
import { UserUserCase } from "../../application/userUserCase";
import { AuthController } from "../controller/authentication.controller";
import { authMiddleware } from "../middleware/authMiddleware";

const route = Router()

const mockRepository = new MockRepository();
const userUseCase = new UserUserCase(mockRepository)
const authController = new AuthController(userUseCase)

route.post('/auth/login', authController.login)
route.post('/auth/register', authController.register)
route.get('/auth/me', authMiddleware, authController.me)

export default route