/*
  Warnings:

  - You are about to drop the column `Roles` on the `Worker` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "WorkerRole" AS ENUM ('Admin', 'Basic');

-- AlterTable
ALTER TABLE "Worker" DROP COLUMN "Roles",
ADD COLUMN     "Role" "WorkerRole" NOT NULL DEFAULT 'Basic';

-- DropEnum
DROP TYPE "WorkerRoles";
