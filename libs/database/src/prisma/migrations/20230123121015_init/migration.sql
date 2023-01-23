/*
  Warnings:

  - Changed the type of `Code` on the `UserOTPCode` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserOTPCode" DROP COLUMN "Code",
ADD COLUMN     "Code" INTEGER NOT NULL;
