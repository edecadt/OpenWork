import { auth } from "@/lib/auth";
import Header from "@/components/header";
import Under_header from "@/components/under_header";
import LightGrayRectangleWithImage from '@/components/GreyRectMid';


export default async function Home() {
  const session = await auth();
  return (
    <div>
      <Header />
      <Under_header />
      <LightGrayRectangleWithImage />
    </div>
  );
}
