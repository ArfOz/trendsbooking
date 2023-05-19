-- AlterTable
ALTER TABLE "Randevu" ADD COLUMN     "Deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "departmentId" INTEGER;

-- AddForeignKey
ALTER TABLE "Randevu" ADD CONSTRAINT "Randevu_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
