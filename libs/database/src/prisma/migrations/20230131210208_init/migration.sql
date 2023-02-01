/*
  Warnings:

  - You are about to drop the `ServiceUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ServiceUser";

-- CreateTable
CREATE TABLE "CompanyUser" (
    "Id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "TCKN" TEXT NOT NULL,
    "CbFirst" BOOLEAN NOT NULL DEFAULT false,
    "TaxNo" TEXT NOT NULL,
    "TaxAdmin" TEXT NOT NULL,
    "IBAN" TEXT NOT NULL,
    "Sector" "Gender"[],
    "Salon" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "District" TEXT NOT NULL,
    "Neighborhood" TEXT NOT NULL,
    "IsActive" BOOLEAN NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3),
    "PrivateKey" TEXT,
    "PublicKey" TEXT,

    CONSTRAINT "CompanyUser_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyUser_Email_key" ON "CompanyUser"("Email");
