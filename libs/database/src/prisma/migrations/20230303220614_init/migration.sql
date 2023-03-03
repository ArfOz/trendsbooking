/*
  Warnings:

  - You are about to drop the column `ImageBuffer` on the `DepartmentPhotos` table. All the data in the column will be lost.
  - You are about to drop the column `MimeType` on the `DepartmentPhotos` table. All the data in the column will be lost.
  - Added the required column `ImageName` to the `DepartmentPhotos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ImageServerName` to the `DepartmentPhotos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ImageType` to the `DepartmentPhotos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DepartmentPhotos" DROP COLUMN "ImageBuffer",
DROP COLUMN "MimeType",
ADD COLUMN     "ImageName" TEXT NOT NULL,
ADD COLUMN     "ImageServerName" TEXT NOT NULL,
ADD COLUMN     "ImageType" TEXT NOT NULL;
