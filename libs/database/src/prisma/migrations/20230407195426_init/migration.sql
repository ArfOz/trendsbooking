/*
  Warnings:

  - The values [Normal] on the enum `WorkerRoles` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "WorkerRoles_new" AS ENUM ('Admin', 'Basic');
ALTER TABLE "Worker" ALTER COLUMN "Roles" DROP DEFAULT;
ALTER TABLE "Worker" ALTER COLUMN "Roles" TYPE "WorkerRoles_new" USING ("Roles"::text::"WorkerRoles_new");
ALTER TYPE "WorkerRoles" RENAME TO "WorkerRoles_old";
ALTER TYPE "WorkerRoles_new" RENAME TO "WorkerRoles";
DROP TYPE "WorkerRoles_old";
ALTER TABLE "Worker" ALTER COLUMN "Roles" SET DEFAULT 'Basic';
COMMIT;

-- AlterTable
ALTER TABLE "Worker" ALTER COLUMN "Roles" SET DEFAULT 'Basic';
