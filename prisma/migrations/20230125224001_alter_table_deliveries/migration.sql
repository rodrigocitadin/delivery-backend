-- DropForeignKey
ALTER TABLE "Deliveries" DROP CONSTRAINT "Deliveries_id_deliveryman_fkey";

-- AlterTable
ALTER TABLE "Deliveries" ALTER COLUMN "id_deliveryman" DROP NOT NULL,
ALTER COLUMN "end_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Deliveries" ADD CONSTRAINT "Deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "Deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
