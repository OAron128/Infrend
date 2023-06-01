import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { VeradoDTO } from '../../../models';

@Entity()
export class Verado implements VeradoDTO{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    neme: string;

    @Column()
    allampolgarsag: string;

    @Column()
    szulhely: string;

    @Column()
    szulido: string;

    @Column()
    lakcim: string;

    @Column()
    tajszam: string;

    @Column()
    iranyitott: number;
    
    @Column()
    iranybetegnev: string;

    @Column()
    iranybetegTaj: string;

    @Column()
    alkalmassag: number;

    @Column()
    orvos: string;

    @Column()
    okozat: string;

}