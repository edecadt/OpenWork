"use client";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Star} from "lucide-react"
import colors from "tailwindcss/colors";

const StarRating = ({ formData, setFormData }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
    setFormData({ ...formData, star: index + 1 });
  };

  return (
      <div className={"flex flex-row"}>
        {[...Array(5)].map((_, index) => (
            <span key={index} onClick={() => handleClick(index)}>
          {index < rating ? (
              <Star className={"fill-blue-500 text-blue-500"} />
          ) : (
              <Star className={"fill-black"} />
          )}
        </span>
        ))}
      </div>
  );
};

export default function Avis() {
  const router = useRouter();
  const session = useSession();
  const [formData, setFormData] = useState({
    star: "",
    content: "",
    userId: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = session.data.user.id;
    try {
      const response = await fetch("/api/createAvis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userId: userId,
        }),
      });

      if (response.ok) {
        console.log("Post created successfully");
        router.push("/success");
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const textAreaChange = (e) => {
    setFormData({ ...formData, content: e.target.value });
  };

  return (
      <div>
        <Header />
        <div className="h-screen bg-[#F1F2F4] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle className="text-center">Your opinion</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                  <div>
                    <Label htmlFor="title">Content of your opinion</Label>
                    <Textarea
                        value={formData.content}
                        onChange={textAreaChange}
                        className={"mb-5"}
                    />
                  </div>
                  <StarRating formData={formData} setFormData={setFormData} />
                  <Button type="submit" className="mt-4">
                    Submit your Opinion
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
}