-- CreateEnum
CREATE TYPE "ExpiredReasonType" AS ENUM ('Expired', 'SignInFromDifferentLocation', 'TokenRefreshed', 'Logout');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'NottoSay');

-- CreateEnum
CREATE TYPE "ServiceGender" AS ENUM ('Male', 'Female', 'Unisex');

-- CreateEnum
CREATE TYPE "OTPType" AS ENUM ('VerifyPhone', 'VerifyEmail');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Normal', 'Provider', 'Admin');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('Hair', 'Nail', 'MakeUp', 'Massage', 'Wax', 'Solarium', 'SkinCare', 'LaserHairRemoval', 'Tattoo', 'Others');

-- CreateEnum
CREATE TYPE "WorkerRoles" AS ENUM ('Admin', 'Normal');

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
    "Gender" "Gender" NOT NULL DEFAULT 'NottoSay',
    "CbFirst" BOOLEAN NOT NULL DEFAULT false,
    "BirthDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "PrivateKey" TEXT,
    "PublicKey" TEXT,
    "CreatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3),
    "IsEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "Role" "UserRole" NOT NULL DEFAULT 'Normal',

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "CompanyUser" (
    "Id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "TCKN" TEXT NOT NULL,
    "CbFirst" BOOLEAN NOT NULL DEFAULT false,
    "TaxNo" TEXT NOT NULL,
    "TaxAdmin" TEXT NOT NULL,
    "IBAN" TEXT NOT NULL,
    "Sector" "ServiceGender"[],
    "Salon" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "District" TEXT NOT NULL,
    "Neighborhood" TEXT NOT NULL,
    "IsActive" BOOLEAN NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3),
    "PrivateKey" TEXT,
    "PublicKey" TEXT,
    "IsEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "Role" "UserRole" NOT NULL DEFAULT 'Provider',

    CONSTRAINT "CompanyUser_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Department" (
    "Id" SERIAL NOT NULL,
    "Salon" TEXT NOT NULL,
    "ServiceType" "ServiceType"[],
    "CompanyUserId" INTEGER,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Worker" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "DepartmentId" INTEGER NOT NULL,
    "Roles" "WorkerRoles" NOT NULL DEFAULT 'Normal',

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "UserToken" (
    "Id" SERIAL NOT NULL,
    "UserId" INTEGER,
    "CompanyUserId" INTEGER,
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
    "UserId" INTEGER,
    "CompanyUserId" INTEGER,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3),

    CONSTRAINT "UserOTPCode_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "WorkTime" (
    "Id" SERIAL NOT NULL,
    "MorningStartAt" TIME(3) NOT NULL,
    "MorningEndAt" TIME(3) NOT NULL,
    "ShiftStart" TIME(3) NOT NULL,
    "ShiftEnd" TIME(3) NOT NULL,
    "NightStartAt" TIME(3) NOT NULL,
    "NightEndAt" TIME(3) NOT NULL,
    "WorkerId" INTEGER,

    CONSTRAINT "WorkTime_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyUser_Email_key" ON "CompanyUser"("Email");

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_CompanyUserId_fkey" FOREIGN KEY ("CompanyUserId") REFERENCES "CompanyUser"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_DepartmentId_fkey" FOREIGN KEY ("DepartmentId") REFERENCES "Department"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_CompanyUserId_fkey" FOREIGN KEY ("CompanyUserId") REFERENCES "CompanyUser"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOTPCode" ADD CONSTRAINT "UserOTPCode_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOTPCode" ADD CONSTRAINT "UserOTPCode_CompanyUserId_fkey" FOREIGN KEY ("CompanyUserId") REFERENCES "CompanyUser"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTime" ADD CONSTRAINT "WorkTime_WorkerId_fkey" FOREIGN KEY ("WorkerId") REFERENCES "Worker"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
