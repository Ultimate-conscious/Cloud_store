/*
  Warnings:

  - You are about to drop the column `url` on the `File` table. All the data in the column will be lost.
  - Added the required column `contentType` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `key` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "url",
ADD COLUMN     "contentType" TEXT NOT NULL,
ADD COLUMN     "key" TEXT NOT NULL;
