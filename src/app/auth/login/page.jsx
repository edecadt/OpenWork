"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/");
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>OpenWork</CardTitle>
          <CardDescription>Login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid items-center w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="name" placeholder="example@example.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your super password"
                />
              </div>
            </div>
          </form>
          <div className="flex flex-col space-y-1.5 pt-6">
            <Button variant="outline" onClick={() => signIn("google")}>
              <FaGoogle className="w-4 h-4 mr-2" /> Login with Google
            </Button>
            <Button variant="outline" onClick={() => signIn("github")}>
              <GithubIcon className="w-4 h-4 mr-2" /> Login with Github
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
