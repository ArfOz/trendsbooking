-- CreateTable
CREATE TABLE "DepartmentPhotos" (
    "Id" SERIAL NOT NULL,
    "field" TEXT NOT NULL,
    "DepartmentId" INTEGER,

    CONSTRAINT "DepartmentPhotos_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "DepartmentPhotos" ADD CONSTRAINT "DepartmentPhotos_DepartmentId_fkey" FOREIGN KEY ("DepartmentId") REFERENCES "Department"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
