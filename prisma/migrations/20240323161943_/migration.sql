/*
  Warnings:

  - Added the required column `department` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "department" INTEGER NOT NULL;
