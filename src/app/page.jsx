import { auth } from "@/lib/auth";
import { getData } from "@/lib/utils";

export default async function Home() {
  const session = await auth();
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>{session?.user ? session.user.email : "Pas co"}</h1>
    </div>
  );
}
