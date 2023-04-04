-- DropForeignKey
ALTER TABLE "WorkTime" DROP CONSTRAINT "WorkTime_WorkerId_fkey";

-- AlterTable
ALTER TABLE "WorkTime" ALTER COLUMN "WorkerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "WorkTime" ADD CONSTRAINT "WorkTime_WorkerId_fkey" FOREIGN KEY ("WorkerId") REFERENCES "Worker"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
