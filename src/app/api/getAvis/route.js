import prisma from "@/lib/prisma";

export async function GET() {
  const allPosts = await prisma.avis.findMany();

  return Response.json(allPosts);
}
