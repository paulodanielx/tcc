-- CreateTable
CREATE TABLE "CollectPoint" (
    "id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "orgId" TEXT NOT NULL,

    CONSTRAINT "CollectPoint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CollectPoint" ADD CONSTRAINT "CollectPoint_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
