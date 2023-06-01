import { AppDataSource } from "../data-source";
import { Verado } from "../entity/Verado";
import { Controller } from "./base.controller";

export class VeradoController extends Controller{
    repository = AppDataSource.getRepository(Verado)
}