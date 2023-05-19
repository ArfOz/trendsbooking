/*
  Warnings:

  - The values [Canceled] on the enum `RandevuStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RandevuStatus_new" AS ENUM ('Waiting', 'Aprroved', 'Cancelled');
ALTER TABLE "Randevu" ALTER COLUMN "Status" TYPE "RandevuStatus_new" USING ("Status"::text::"RandevuStatus_new");
ALTER TYPE "RandevuStatus" RENAME TO "RandevuStatus_old";
ALTER TYPE "RandevuStatus_new" RENAME TO "RandevuStatus";
DROP TYPE "RandevuStatus_old";
COMMIT;
