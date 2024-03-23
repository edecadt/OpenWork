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
import { FaGoogle } from "react-icons/fa";

export default async function Login() {
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
              <div className="flex flex-col space-y-1.5">
                <Button variant="outline">
                  <FaGoogle className="w-4 h-4 mr-2" /> Login with Google
                </Button>
                <Button variant="outline">
                  <GithubIcon className="w-4 h-4 mr-2" /> Login with Github
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
