/*
  Warnings:

  - You are about to drop the column `WorkerId` on the `Services` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_WorkerId_fkey";

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "WorkerId";

-- CreateTable
CREATE TABLE "ServiceWorker" (
    "Id" SERIAL NOT NULL,
    "ServiceId" INTEGER,
    "WorkerId" INTEGER,

    CONSTRAINT "ServiceWorker_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "ServiceWorker" ADD CONSTRAINT "ServiceWorker_ServiceId_fkey" FOREIGN KEY ("ServiceId") REFERENCES "Services"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceWorker" ADD CONSTRAINT "ServiceWorker_WorkerId_fkey" FOREIGN KEY ("WorkerId") REFERENCES "Worker"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
