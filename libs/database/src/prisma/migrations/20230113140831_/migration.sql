/*
  Warnings:

  - Made the column `FirstName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `LastName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Phone` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `Gender` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "CbFirst" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "FirstName" SET NOT NULL,
ALTER COLUMN "LastName" SET NOT NULL,
ALTER COLUMN "Phone" SET NOT NULL,
DROP COLUMN "Gender",
ADD COLUMN     "Gender" "Gender" NOT NULL;
