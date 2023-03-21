/*
  Warnings:

  - You are about to drop the column `ServiceTimes` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `Services` on the `Worker` table. All the data in the column will be lost.
  - Added the required column `ServiceId` to the `Worker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Department" DROP COLUMN "ServiceTimes",
ADD COLUMN     "DepartmentID" TEXT;

-- AlterTable
ALTER TABLE "Worker" DROP COLUMN "Services",
ADD COLUMN     "ServiceId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Services" (
    "Id" SERIAL NOT NULL,
    "ServiceType" "ServiceType" NOT NULL,
    "ServiceTimes" TEXT NOT NULL,
    "ServiceName" TEXT NOT NULL,
    "Price" TEXT NOT NULL,
    "Prim" TEXT NOT NULL,
    "ServiceGender" "ServiceGender" NOT NULL,
    "WorkerId" INTEGER,
    "DepartmentId" INTEGER,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_DepartmentId_fkey" FOREIGN KEY ("DepartmentId") REFERENCES "Department"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_ServiceId_fkey" FOREIGN KEY ("ServiceId") REFERENCES "Services"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
