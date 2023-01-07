/*
  Warnings:

  - Made the column `Email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Password` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Username` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "Email" SET NOT NULL,
ALTER COLUMN "Password" SET NOT NULL,
ALTER COLUMN "Username" SET NOT NULL;
