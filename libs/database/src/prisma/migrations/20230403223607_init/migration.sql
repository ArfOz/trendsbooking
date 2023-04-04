-- DropForeignKey
ALTER TABLE "WorkTime" DROP CONSTRAINT "WorkTime_WorkerId_fkey";

-- AlterTable
ALTER TABLE "WorkTime" ADD COLUMN     "DepartmentId" INTEGER;

-- AddForeignKey
ALTER TABLE "WorkTime" ADD CONSTRAINT "WorkTime_WorkerId_fkey" FOREIGN KEY ("WorkerId") REFERENCES "Worker"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTime" ADD CONSTRAINT "WorkTime_DepartmentId_fkey" FOREIGN KEY ("DepartmentId") REFERENCES "Department"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
