import prisma from "@/lib/prisma";

export async function POST(req) {
  const data = await req.json();
  try {
    const createdPost = await prisma.post.create({
      data: {
        title: data.title,
        type: data.jobType,
        description: data.description,
        content: data.content,
        location: data.location,
        department: data.region,
        company: data.company,
        salary: parseFloat(data.salary),
        ownerId: data.userId,
      },
    });
    return new Response("Post created successfully", { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return new Response("Error creating post", { status: 500 });
  }
}
