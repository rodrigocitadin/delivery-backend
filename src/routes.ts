import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { FindAllAvailableController } from "./modules/deliveries/useCases/allDeliveriesAvailable/FindAllAvailableController";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController";
import { FindAllClientDeliveriesController } from "./modules/clients/useCases/findAllDeliveries/FindAllClientDeliveriesController";

const routes = Router();

const createClientController = new CreateClientController;
const authenticateClientController = new AuthenticateClientController;
const findAllDeliveriesClient = new FindAllClientDeliveriesController;

const createDeliverymanController = new CreateDeliverymanController
const authenticateDeliverymanController = new AuthenticateDeliverymanController;

const createDeliveryController = new CreateDeliveryController;
const findAllAvailableController = new FindAllAvailableController;
const updateDeliverymanController = new UpdateDeliverymanController;


routes.post("/client/", createClientController.handle);
routes.post("/client/authenticate/", authenticateClientController.handle);
routes.get("/client/deliveries/", ensureAuthenticateClient, findAllDeliveriesClient.handle);

routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle);

routes.post("/delivery/", ensureAuthenticateClient, createDeliveryController.handle);
routes.get("/delivery/available/", ensureAuthenticateDeliveryman, findAllAvailableController.handle);
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);

export { routes };