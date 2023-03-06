/*
  Warnings:

  - You are about to drop the column `field` on the `DepartmentPhotos` table. All the data in the column will be lost.
  - Added the required column `ImageBuffer` to the `DepartmentPhotos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MimeType` to the `DepartmentPhotos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DepartmentPhotos" DROP COLUMN "field",
ADD COLUMN     "ImageBuffer" TEXT NOT NULL,
ADD COLUMN     "MimeType" TEXT NOT NULL;
