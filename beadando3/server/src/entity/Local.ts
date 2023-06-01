import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LocalDTO } from '../../../models';

@Entity()
export class Local implements LocalDTO{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    intezmeny:string;

    @Column()
    cim: string;

    @Column()
    activity: number;
}