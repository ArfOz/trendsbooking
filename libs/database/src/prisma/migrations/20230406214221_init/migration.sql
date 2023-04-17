/*
  Warnings:

  - Made the column `AccessToken` on table `UserToken` required. This step will fail if there are existing NULL values in that column.
  - Made the column `RefreshToken` on table `UserToken` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserToken" ALTER COLUMN "AccessToken" SET NOT NULL,
ALTER COLUMN "RefreshToken" SET NOT NULL;
