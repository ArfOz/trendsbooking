/*
  Warnings:

  - You are about to drop the `_ServicesToWorker` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `WorkerId` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ServicesToWorker" DROP CONSTRAINT "_ServicesToWorker_A_fkey";

-- DropForeignKey
ALTER TABLE "_ServicesToWorker" DROP CONSTRAINT "_ServicesToWorker_B_fkey";

-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "WorkerId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ServicesToWorker";

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_WorkerId_fkey" FOREIGN KEY ("WorkerId") REFERENCES "Worker"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
