import { auth } from "@/lib/auth";
import Header from "@/components/header";
import Under_header from "@/components/under_header";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <Header />
      <Under_header />
      <h1>{session?.user ? session.user.email : "Pas co"}</h1>
    </div>
  );
}
