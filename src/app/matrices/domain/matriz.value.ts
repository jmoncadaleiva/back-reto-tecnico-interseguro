import { MatrizEntity } from './matriz.entity'

export class MatrizValue implements MatrizEntity {
    value: number[][]

    constructor(value: number[][]) {
        this.value = value
    }
}