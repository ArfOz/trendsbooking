-- CreateEnum
CREATE TYPE "ExpiredReasonType" AS ENUM ('Expired', 'SignInFromDifferentLocation', 'TokenRefreshed');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "PrivateKey" TEXT,
ADD COLUMN     "PublicKey" TEXT;

-- CreateTable
CREATE TABLE "UserToken" (
    "Id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "AccessToken" TEXT NOT NULL,
    "RefreshToken" TEXT NOT NULL,
    "ExpiresIn" TIMESTAMP(3) NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserToken_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "ServiceUser" (
    "Id" SERIAL NOT NULL,
    "Email" TEXT,
    "Password" TEXT,
    "Username" TEXT,
    "Phone" TEXT,
    "Country" TEXT,
    "City" TEXT,

    CONSTRAINT "ServiceUser_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceUser_Email_key" ON "ServiceUser"("Email");

-- AddForeignKey
ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
