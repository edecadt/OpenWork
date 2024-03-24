-- CreateTable
CREATE TABLE "Avis" (
    "id" TEXT NOT NULL,
    "star" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Avis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Avis_createdAt_idx" ON "Avis"("createdAt");

-- AddForeignKey
ALTER TABLE "Avis" ADD CONSTRAINT "Avis_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
