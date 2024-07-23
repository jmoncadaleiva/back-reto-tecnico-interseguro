import { Router } from 'express'
import { MatrizUseCase } from '../application/matrizUseCase'
import { MatrizController } from './matriz.controller'
import { authMiddleware } from '../../authentication/infrastructure/middleware/authMiddleware'

const route = Router()

const matrizUseCase = new MatrizUseCase()
const matrizController = new MatrizController(matrizUseCase)

route.post('/matriz/verify', authMiddleware, matrizController.verifyIfIsDiagonal)
route.post('/matriz/factorize', authMiddleware, matrizController.calculateQRFactorization)

export default route