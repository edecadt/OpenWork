import { auth } from "@/lib/auth";
import Header from "@/components/header";
import Under_header from "@/components/under_header";
import MyPage from '@/components/jobcomp';


export default async function Home() {
  const session = await auth();
  const displayPass = ["Home / Find job"];
  const Pass = ["/"];
  const pageName = "Find Job";
  return (
    <div>
      <Header />
      <Under_header pageName={pageName} displayPass={displayPass} Pass={Pass}/>
      <MyPage />
    </div>
  );
}