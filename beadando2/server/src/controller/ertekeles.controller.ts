import { AppDataSource } from "../data-source";
import { Ertekeles } from "../entity/Ertekeles";
import { Controller } from "./base.controller";

export class ErtekelesController extends Controller{
    repository = AppDataSource.getRepository(Ertekeles)
}