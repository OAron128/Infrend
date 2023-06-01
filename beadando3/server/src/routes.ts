import express  from "express";
import { UserController } from "./controller/user.controller";
import { LocalController } from "./controller/local.controller";
import { VeradoContoller } from "./controller/verado.controller";

export function getRoutes() {
    const router = express.Router();

    const localController = new LocalController();

    router.get('/locals', localController.getAll);
    router.get('/locals/:id', localController.getOne);
    router.post('/locals/', localController.create);
    router.put('/locals/', localController.update);
    router.delete('/locals/:id', localController.delete);

    const veradoController = new VeradoContoller();

    router.get('/veradok', veradoController.getAll);
    router.get('/veradok/:id', veradoController.getOne);
    router.post('/veradok/', veradoController.create);
    router.put('/veradok/', veradoController.update);
    router.delete('/veradok/:id', veradoController.delete);


    // const userController = new UserController();
    return router;
}