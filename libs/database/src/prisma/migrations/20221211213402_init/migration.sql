-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "Email" TEXT,
    "Password" TEXT,
    "Username" TEXT,
    "FirstName" TEXT,
    "LastName" TEXT,
    "Country" TEXT,
    "Phone" TEXT,
    "Gender" TEXT,
    "BirthDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
