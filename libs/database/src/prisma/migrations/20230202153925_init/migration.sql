/*
  Warnings:

  - You are about to drop the column `CompanyId` on the `UserOTPCode` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserOTPCode" DROP CONSTRAINT "UserOTPCode_CompanyId_fkey";

-- AlterTable
ALTER TABLE "UserOTPCode" DROP COLUMN "CompanyId",
ALTER COLUMN "UserId" DROP DEFAULT;

-- CreateTable
CREATE TABLE "CompanyOTPCode" (
    "Id" SERIAL NOT NULL,
    "Code" INTEGER NOT NULL,
    "Attempts" INTEGER NOT NULL DEFAULT 0,
    "IsDeleted" BOOLEAN NOT NULL DEFAULT false,
    "Type" "OTPType" NOT NULL,
    "ExpiredAt" TIMESTAMP(3) NOT NULL,
    "CompanyUserId" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3),

    CONSTRAINT "CompanyOTPCode_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "CompanyOTPCode" ADD CONSTRAINT "CompanyOTPCode_CompanyUserId_fkey" FOREIGN KEY ("CompanyUserId") REFERENCES "CompanyUser"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
