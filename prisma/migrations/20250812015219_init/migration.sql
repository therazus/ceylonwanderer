-- CreateEnum
CREATE TYPE "public"."Language" AS ENUM ('EN', 'DE');

-- CreateEnum
CREATE TYPE "public"."DestinationStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "public"."ImageType" AS ENUM ('HERO', 'GALLERY', 'THUMBNAIL', 'THINGS_TO_DO');

-- CreateTable
CREATE TABLE "public"."destinations" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "public"."DestinationStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "destinations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."destination_content" (
    "id" TEXT NOT NULL,
    "language" "public"."Language" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shortDescription" TEXT,
    "heroTitle" TEXT,
    "heroSubtitle" TEXT,
    "flightCost" INTEGER,
    "vacationCostAmount" INTEGER,
    "vacationCostDuration" TEXT,
    "travelTime" TEXT,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "destinationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "destination_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."destination_images" (
    "id" TEXT NOT NULL,
    "blobUrl" TEXT NOT NULL,
    "originalName" TEXT,
    "altText" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "fileSize" INTEGER,
    "mimeType" TEXT,
    "imageType" "public"."ImageType" NOT NULL DEFAULT 'GALLERY',
    "order" INTEGER NOT NULL DEFAULT 0,
    "destinationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "destination_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tour_plans" (
    "id" TEXT NOT NULL,
    "language" "public"."Language" NOT NULL,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "destinationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tour_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."things_to_do" (
    "id" TEXT NOT NULL,
    "language" "public"."Language" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "icon" TEXT,
    "distance" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "destinationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "things_to_do_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "destinations_slug_key" ON "public"."destinations"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "destination_content_destinationId_language_key" ON "public"."destination_content"("destinationId", "language");

-- CreateIndex
CREATE UNIQUE INDEX "tour_plans_destinationId_language_key_key" ON "public"."tour_plans"("destinationId", "language", "key");

-- AddForeignKey
ALTER TABLE "public"."destination_content" ADD CONSTRAINT "destination_content_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "public"."destinations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."destination_images" ADD CONSTRAINT "destination_images_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "public"."destinations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tour_plans" ADD CONSTRAINT "tour_plans_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "public"."destinations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."things_to_do" ADD CONSTRAINT "things_to_do_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "public"."destinations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
