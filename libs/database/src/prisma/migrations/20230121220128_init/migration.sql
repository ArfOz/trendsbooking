-- CreateEnum
CREATE TYPE "ExpiredReasonType" AS ENUM ('Expired', 'SignInFromDifferentLocation', 'TokenRefreshed');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "OTPType" AS ENUM ('VerifyPhone', 'VerifyEmail');

-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Country" TEXT,
    "Phone" TEXT NOT NULL,
    "Gender" "Gender" NOT NULL,
    "CbFirst" BOOLEAN NOT NULL DEFAULT false,
    "BirthDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "PrivateKey" TEXT,
    "PublicKey" TEXT,
    "CreatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3),
    "IsEmailVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "UserToken" (
    "Id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "AccessToken" TEXT NOT NULL,
    "RefreshToken" TEXT NOT NULL,
    "ExpiresIn" TIMESTAMP(3) NOT NULL,
    "ExpiresInRefresh" TIMESTAMP(3) NOT NULL,
    "ExpiredReason" "ExpiredReasonType",
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserToken_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "UserOTPCode" (
    "Id" SERIAL NOT NULL,
    "Code" TEXT NOT NULL,
    "Attempts" INTEGER NOT NULL DEFAULT 0,
    "IsDeleted" BOOLEAN NOT NULL DEFAULT false,
    "Type" "OTPType" NOT NULL,
    "ExpiredAt" TIMESTAMP(3) NOT NULL,
    "UserId" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3),

    CONSTRAINT "UserOTPCode_pkey" PRIMARY KEY ("Id")
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
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceUser_Email_key" ON "ServiceUser"("Email");

-- AddForeignKey
ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOTPCode" ADD CONSTRAINT "UserOTPCode_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
