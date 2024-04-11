-- CreateTable
CREATE TABLE "Batch" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "reciclavel" BOOLEAN NOT NULL,
    "collectPointId" TEXT NOT NULL,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_collectPointId_fkey" FOREIGN KEY ("collectPointId") REFERENCES "CollectPoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
