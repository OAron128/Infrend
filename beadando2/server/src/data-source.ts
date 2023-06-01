import "reflect-metadata"
import { DataSource } from "typeorm"
import { Ertekeles } from "./entity/Ertekeles"
import { Iranyitott } from "./entity/Iranyitott"
// import { User } from "./entity/User"
import { Verado } from "./entity/Verado"
import { Local } from "./entity/Local"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    // password: "root",
    database: "gepkolcsonzo",
    synchronize: true,
    logging: true,
    entities: [Local,Verado,Iranyitott, Ertekeles],
    migrations: [],
    subscribers: [],
})