/*
  Warnings:

  - The primary key for the `posts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "posts" DROP CONSTRAINT "posts_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "title" DROP DEFAULT,
ALTER COLUMN "title" SET DATA TYPE TEXT,
ADD CONSTRAINT "posts_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "posts_title_seq";
