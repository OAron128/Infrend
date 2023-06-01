import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { VeradoDTO,IranyitottDTO,ErtekelesDTO } from '../../../models';
import { Iranyitott } from './Iranyitott';
import { Ertekeles } from './Ertekeles';

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

    @OneToMany(() => Iranyitott, iranyitott => iranyitott.verado, {eager:true, cascade:true})
    iranyitott: IranyitottDTO[];

    @OneToMany(() => Ertekeles, iranyitott => iranyitott.verado, {eager:true, cascade:true})
    ertekeles: ErtekelesDTO[];
}