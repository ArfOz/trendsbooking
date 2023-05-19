/*
  Warnings:

  - Added the required column `Status` to the `Randevu` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RandevuStatus" AS ENUM ('Waiting', 'Aprroved', 'Canceled');

-- AlterTable
ALTER TABLE "Randevu" ADD COLUMN     "Status" "RandevuStatus" NOT NULL;
