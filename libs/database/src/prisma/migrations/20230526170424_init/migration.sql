/*
  Warnings:

  - Added the required column `ImageUrl` to the `DepartmentPhotos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DepartmentPhotos" ADD COLUMN     "ImageUrl" TEXT NOT NULL;
