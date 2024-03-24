import { auth } from "@/lib/auth";
import Header from "@/components/header";
import Under_header from "@/components/under_header";
import LightGrayRectangleWithImage from '@/components/GreyRectMid';
import HowWork from "@/components/how_work";
import Avis from "@/components/avis";

export default async function Home() {
  const session = await auth();
  const displayPass = ["Home"];
  const Pass = ["/"];
  const pageName = "Home";
  return (
    <div>
      <Header />
      <Under_header pageName={pageName} displayPass={displayPass} Pass={Pass}/>
      <LightGrayRectangleWithImage />
      <HowWork />
      <Avis />
    </div>
  );
}
