import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Local } from "./Local"
import { UserDTO } from "../../../models"

@Entity()
export class User implements UserDTO {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    // @OneToMany(() => Product, (product) => product.seller)
    // products: Product[];
}
