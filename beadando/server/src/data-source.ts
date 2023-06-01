import "reflect-metadata"
import { DataSource } from "typeorm"
import { Local } from "./entity/Local"
import { Verado } from "./entity/Verado"

import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    // password: "root",
    database: "infrend2023_webshop",
    synchronize: true,
    logging: true,
    entities: [User, Local,Verado],
    migrations: [],
    subscribers: [],
})
