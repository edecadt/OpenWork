import { auth } from "@/lib/auth";
import Header from "@/components/header";
import Under_header from "@/components/under_header";
import LightGrayRectangleWithImage from '@/components/GreyRectMid';
import Footer from "@/components/footer";

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
      <Footer/>
    </div>
  );
}
