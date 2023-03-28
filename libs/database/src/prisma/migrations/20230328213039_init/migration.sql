-- DropForeignKey
ALTER TABLE "WorkTime" DROP CONSTRAINT "WorkTime_WorkerId_fkey";

-- AddForeignKey
ALTER TABLE "WorkTime" ADD CONSTRAINT "WorkTime_WorkerId_fkey" FOREIGN KEY ("WorkerId") REFERENCES "Worker"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
