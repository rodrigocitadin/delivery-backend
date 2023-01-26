import { prisma } from "../../../../database/prismaClient";

export class AllDeliveriesAvailableUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null
      }
    });

    return deliveries;
  }
}