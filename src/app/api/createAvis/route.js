import prisma from "@/lib/prisma";

export async function POST(req) {
  const data = await req.json();
  try {
    const createdPost = await prisma.avis.create({
      data: {
        star: data.star,
        content: data.content,
        ownerId: data.userId,
      },
    });
    return new Response("Avis created successfully", { status: 201 });
  } catch (error) {
    console.error("Error creating avis:", error);
    return new Response("Error creating avos", { status: 500 });
  }
}
