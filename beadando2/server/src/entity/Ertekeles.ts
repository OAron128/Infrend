import { Column, Entity, PrimaryGeneratedColumn, MayTOne } from 'typeorm';
import { Verado } from './Verado';

@Entity
export class Ertekeles{
    
    id: number;

    alkalmassag: boolean;
    
    orvos: string;
    
    okozat: string;

    @MayTOne(() => Verado, verado => verado.ertekeles)
    verado: Verado;
}