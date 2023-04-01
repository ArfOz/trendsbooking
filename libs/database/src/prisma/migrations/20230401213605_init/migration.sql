-- CreateTable
CREATE TABLE "Randevu" (
    "Id" SERIAL NOT NULL,
    "WorkerId" INTEGER NOT NULL,
    "ServiceId" INTEGER NOT NULL,
    "StartTime" TIMESTAMP(3) NOT NULL,
    "EndTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Randevu_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Randevu" ADD CONSTRAINT "Randevu_WorkerId_fkey" FOREIGN KEY ("WorkerId") REFERENCES "Worker"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Randevu" ADD CONSTRAINT "Randevu_ServiceId_fkey" FOREIGN KEY ("ServiceId") REFERENCES "Services"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
