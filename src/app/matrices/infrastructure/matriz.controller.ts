import { MatrizUseCase } from "../application/matrizUseCase";
import { Request, Response } from "express";

export class MatrizController {
    constructor(private matrizUseCase: MatrizUseCase) {}

    public verifyIfIsDiagonal = async ({ body }: Request, res: Response) => {
        const isDiagonal = this.matrizUseCase.isDiagonal(body)
        res.status(200).json({isDiagonal})
    }

    public calculateQRFactorization = async ({ body }: Request, res: Response) => {
        const factoredMatriz = this.matrizUseCase.calculateQRFactorization(body)
        res.status(200).json({factoredMatriz})
    }
}