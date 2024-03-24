import { auth } from "@/lib/auth";
import Header from "@/components/header";
import Under_header from "@/components/under_header";
import LightGrayRectangleWithImage from '@/components/GreyRectMid';
import Footer from "@/components/footer";
import HowWork from "@/components/how_work";
import Employe_candidate from "@/components/employe_candiate";

export default async function Home() {
  const session = await auth();
  const displayPass = ["Home"];
  const Pass = ["/"];
  const pageName = "Home";
  return (
    <div>
      <Header />
      {/* <Under_header pageName={pageName} displayPass={displayPass} Pass={Pass}/> */}
      <LightGrayRectangleWithImage />
      <HowWork />
      <Employe_candidate />
      <Footer/>
    </div>
  );
}
