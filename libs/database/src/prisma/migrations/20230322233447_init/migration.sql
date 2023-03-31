-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_WorkerId_fkey";

-- AlterTable
ALTER TABLE "Services" ALTER COLUMN "WorkerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_WorkerId_fkey" FOREIGN KEY ("WorkerId") REFERENCES "Worker"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
