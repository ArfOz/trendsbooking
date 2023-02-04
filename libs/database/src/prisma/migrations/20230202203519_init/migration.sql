-- DropForeignKey
ALTER TABLE "UserToken" DROP CONSTRAINT "UserToken_UserId_fkey";

-- AlterTable
ALTER TABLE "UserToken" ADD COLUMN     "CompanyUserId" INTEGER,
ALTER COLUMN "UserId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_CompanyUserId_fkey" FOREIGN KEY ("CompanyUserId") REFERENCES "CompanyUser"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
