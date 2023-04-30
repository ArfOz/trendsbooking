/*
  Warnings:

  - Added the required column `FirstPass` to the `Worker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkTime" ADD COLUMN     "Holiday" TEXT;

-- AlterTable
ALTER TABLE "Worker" ADD COLUMN     "FirstPass" BOOLEAN NOT NULL;
