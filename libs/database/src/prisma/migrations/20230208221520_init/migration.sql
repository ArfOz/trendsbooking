-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('Hair', 'Nail', 'MakeUp', 'Massage', 'Wax', 'Solarium', 'SkinCare', 'LaserHairRemoval', 'Tattoo', 'Others');

-- CreateTable
CREATE TABLE "Department" (
    "Id" SERIAL NOT NULL,
    "Salon" TEXT NOT NULL,
    "ServiceType" "ServiceType"[],
    "CompanyUserId" INTEGER,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Worker" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "DepartmentId" INTEGER NOT NULL,

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_CompanyUserId_fkey" FOREIGN KEY ("CompanyUserId") REFERENCES "CompanyUser"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_DepartmentId_fkey" FOREIGN KEY ("DepartmentId") REFERENCES "Department"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
