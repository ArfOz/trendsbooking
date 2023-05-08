/*
  Warnings:

  - The `Holiday` column on the `WorkTime` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `UserId` to the `Randevu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Randevu" ADD COLUMN     "UserId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "WorkTime" ADD COLUMN     "Date" DATE,
DROP COLUMN "Holiday",
ADD COLUMN     "Holiday" BOOLEAN;

-- AddForeignKey
ALTER TABLE "Randevu" ADD CONSTRAINT "Randevu_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
