import express  from "express";
import { LocalController } from "./controller/local.controller";
import { VeradoController } from "./controller/verado.controller";

export function getRoutes() {
    const router = express.Router();

    const localController = new LocalController();

    router.get('/local', localController.getAll);
    router.get('/local/:id', localController.getOne);
    router.post('/local/', localController.create);
    router.put('/local/', localController.update);
    router.delete('/local/:id', localController.delete);

    const veradoController = new VeradoController();

    router.get('/veradok', veradoController.getAll);
    router.get('/veradok/:id', veradoController.getOne);
    router.post('/veradok/', veradoController.create);
    router.put('/veradok/', veradoController.update);
    router.delete('/veradok/:id', veradoController.delete);

    return router;
}