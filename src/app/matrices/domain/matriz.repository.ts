import { MatrizEntity } from "./matriz.entity";
import { MatrixNumber } from "./types";

export interface MatrizRepository {
    isDiagonal(matriz: MatrizEntity): boolean;
    calculateQRFactorization(matriz: MatrizEntity): {Q: MatrixNumber, R: MatrixNumber};
}