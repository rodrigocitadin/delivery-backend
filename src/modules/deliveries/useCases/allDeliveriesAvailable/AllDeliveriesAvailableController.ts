import { Request, Response, json } from "express";
import { AllDeliveriesAvailableUseCase } from "./AllDeliveriesAvailableUseCase";

export class AllDeliveriesAvailableController {
  async handle(request: Request, response: Response) {
    const allDeliveriesAvailableUseCase = new AllDeliveriesAvailableUseCase();

    const deliveries = await allDeliveriesAvailableUseCase.execute();

    return response.json(deliveries);
  }
}