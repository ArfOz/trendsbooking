/*
  Warnings:

  - The values [Admin,Basic] on the enum `WorkerRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "WorkerRole_new" AS ENUM ('WorkerAdmin', 'WorkerBasic');
ALTER TABLE "Worker" ALTER COLUMN "Role" DROP DEFAULT;
ALTER TABLE "Worker" ALTER COLUMN "Role" TYPE "WorkerRole_new" USING ("Role"::text::"WorkerRole_new");
ALTER TYPE "WorkerRole" RENAME TO "WorkerRole_old";
ALTER TYPE "WorkerRole_new" RENAME TO "WorkerRole";
DROP TYPE "WorkerRole_old";
ALTER TABLE "Worker" ALTER COLUMN "Role" SET DEFAULT 'WorkerBasic';
COMMIT;

-- AlterTable
ALTER TABLE "Worker" ALTER COLUMN "Role" SET DEFAULT 'WorkerBasic';
