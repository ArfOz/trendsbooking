-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Normal', 'Provider', 'Admin');

-- AlterTable
ALTER TABLE "CompanyUser" ADD COLUMN     "Role" "UserRole" NOT NULL DEFAULT 'Provider';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Role" "UserRole" NOT NULL DEFAULT 'Normal';
