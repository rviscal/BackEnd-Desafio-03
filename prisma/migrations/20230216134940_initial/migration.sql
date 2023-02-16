-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);
