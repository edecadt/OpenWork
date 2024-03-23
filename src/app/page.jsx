import { auth } from "@/lib/auth";
import LightGrayRectangleWithImage from '@/components/GreyRectMid';


export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h1>{session?.user ? session.user.email : "Pas co"}</h1>
      <LightGrayRectangleWithImage />
    </div>
  );
}
