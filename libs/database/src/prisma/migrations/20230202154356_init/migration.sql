/*
  Warnings:

  - You are about to drop the `CompanyOTPCode` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanyOTPCode" DROP CONSTRAINT "CompanyOTPCode_CompanyUserId_fkey";

-- DropForeignKey
ALTER TABLE "UserOTPCode" DROP CONSTRAINT "UserOTPCode_UserId_fkey";

-- AlterTable
ALTER TABLE "UserOTPCode" ADD COLUMN     "CompanyUserId" INTEGER,
ALTER COLUMN "UserId" DROP NOT NULL;

-- DropTable
DROP TABLE "CompanyOTPCode";

-- AddForeignKey
ALTER TABLE "UserOTPCode" ADD CONSTRAINT "UserOTPCode_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOTPCode" ADD CONSTRAINT "UserOTPCode_CompanyUserId_fkey" FOREIGN KEY ("CompanyUserId") REFERENCES "CompanyUser"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
