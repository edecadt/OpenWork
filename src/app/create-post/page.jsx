import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function CreatePost() {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
    return;
  }
  return (
    <div>
      <h1>{session?.user ? session.user.email : "Pas co"}</h1>
    </div>
  );
}
