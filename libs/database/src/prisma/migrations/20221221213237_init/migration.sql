/*
  Warnings:

  - Added the required column `ExpiresInRefresh` to the `UserToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserToken" ADD COLUMN     "ExpiresInRefresh" TIMESTAMP(3) NOT NULL;
