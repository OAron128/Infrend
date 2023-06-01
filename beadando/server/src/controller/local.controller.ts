import { AppDataSource } from "../data-source";
import { Local } from "../entity/Local";
import { Controller } from "./base.controller";

export class LocalController extends Controller{
    repository = AppDataSource.getRepository(Local)
}