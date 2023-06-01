import { Column, Entity, PrimaryGeneratedColumn, MayTOne } from 'typeorm';
import { Verado } from './Verado';

@Entity
export class Iranyitott{
    @PrimaryGeneratedColumn
    id: number;

    @Column
    iranybetegnev: string;

    @Column
    iranybetegTaj: string;

    @MayTOne(() => Verado, verado => verado.iranyitott)
    verado: Verado;



}