/*
  Warnings:

  - The values [Admin] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('Normal', 'Provider');
ALTER TABLE "User" ALTER COLUMN "Role" DROP DEFAULT;
ALTER TABLE "CompanyUser" ALTER COLUMN "Role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "Role" TYPE "UserRole_new" USING ("Role"::text::"UserRole_new");
ALTER TABLE "CompanyUser" ALTER COLUMN "Role" TYPE "UserRole_new" USING ("Role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "User" ALTER COLUMN "Role" SET DEFAULT 'Normal';
ALTER TABLE "CompanyUser" ALTER COLUMN "Role" SET DEFAULT 'Provider';
COMMIT;
