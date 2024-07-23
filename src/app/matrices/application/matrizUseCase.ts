import { MatrizValue } from '../domain/matriz.value';
import { qr, matrix } from 'mathjs'
import { MatrixNumber } from '../domain/types';

export class MatrizUseCase {
    constructor () {}

    isDiagonal (matriz: MatrizValue): boolean {
        const A = matriz.value
        const rows = A.length;
        const cols = A[0].length;

        if (rows !== cols) {
            return false;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (i !== j && A[i][j] !== 0) {
                    return false;
                }
            }
        }
        return true;
    }

    calculateQRFactorization(matriz: MatrizValue): { Q: MatrixNumber; R: MatrixNumber } {
        const { Q, R } = qr(matrix(matriz.value));
        const qMatrix: MatrixNumber = Q.valueOf() as MatrixNumber;
        const rMatrix: MatrixNumber = R.valueOf() as MatrixNumber;

        return { Q: qMatrix, R: rMatrix };
    }
}