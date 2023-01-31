/*
  Warnings:

  - You are about to drop the column `Tckn` on the `ServiceUser` table. All the data in the column will be lost.
  - Added the required column `District` to the `ServiceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FirstName` to the `ServiceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IBAN` to the `ServiceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IsActive` to the `ServiceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LastName` to the `ServiceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Neighborhood` to the `ServiceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Salon` to the `ServiceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TCKN` to the `ServiceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TaxAdmin` to the `ServiceUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TaxNo` to the `ServiceUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServiceUser" DROP COLUMN "Tckn",
ADD COLUMN     "CbFirst" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "District" TEXT NOT NULL,
ADD COLUMN     "FirstName" TEXT NOT NULL,
ADD COLUMN     "IBAN" TEXT NOT NULL,
ADD COLUMN     "IsActive" BOOLEAN NOT NULL,
ADD COLUMN     "LastName" TEXT NOT NULL,
ADD COLUMN     "Neighborhood" TEXT NOT NULL,
ADD COLUMN     "Salon" TEXT NOT NULL,
ADD COLUMN     "Sector" "Gender"[],
ADD COLUMN     "TCKN" TEXT NOT NULL,
ADD COLUMN     "TaxAdmin" TEXT NOT NULL,
ADD COLUMN     "TaxNo" TEXT NOT NULL;
