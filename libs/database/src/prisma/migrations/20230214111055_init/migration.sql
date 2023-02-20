/*
  Warnings:

  - Made the column `WorkerId` on table `WorkTime` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "WorkTime" DROP CONSTRAINT "WorkTime_WorkerId_fkey";

-- AlterTable
ALTER TABLE "WorkTime" ALTER COLUMN "WorkerId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "WorkTime" ADD CONSTRAINT "WorkTime_WorkerId_fkey" FOREIGN KEY ("WorkerId") REFERENCES "Worker"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
