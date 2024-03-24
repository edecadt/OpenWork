import prisma from "@/lib/prisma";

export async function GET() {
  const allPosts = await prisma.post.findMany();

  return Response.json(allPosts);
}
