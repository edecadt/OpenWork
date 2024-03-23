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

export default function CreatePostPage() {
  const router = useRouter();
  const session = useSession();

  const [formData, setFormData] = useState({
    title: "",
    jobType: "",
    salary: "",
    company: "",
    description: "",
    content: "",
    location: "",
    region: "",
    userId: session.data.user.id ?? "",
  });
  if (!session || !session.data?.user) {
    router.push("/auth/login");
    return null;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChangeJobType = (value) => {
    setFormData({ ...formData, jobType: value });
  };

  const handleSelectChangeRegion = (value) => {
    setFormData({ ...formData, region: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = session.data.user.id;

    try {
      const response = await fetch("/api/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userId: userId, // Add userId to the request body
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
    <div className="h-screen bg-[#F1F2F4] flex flex-col">
      <Header />
      <div className="flex items-center justify-center flex-grow">
        <Card className="w-[1200px]">
          <CardHeader>
            <CardTitle className="text-center">Create a job offer</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="grid items-center w-full gap-4">
                <div className="flex flex-row justify-between">
                  <div className="w-[600px]">
                    <Label htmlFor="title">Title of your job offer</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Frontend developer ..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Select a type of job</Label>
                    <Select
                      id="jobType"
                      value={formData.jobType}
                      name="jobType"
                      onValueChange={handleSelectChangeJobType}
                    >
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="Job Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="intership">Intership</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="salary">Salary</Label>
                    <Input
                      id="salary"
                      name="salary"
                      type="number"
                      value={formData.salary}
                      onChange={handleChange}
                      placeholder="50000$"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="company">Name of your company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="AcmeInc."
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Describe your offer</Label>
                  <Input
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Frontend developper ..."
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="content">Content of your offer</Label>
                  <Textarea
                    value={formData.content}
                    onChange={textAreaChange}
                  />
                </div>
                <div className="flex justify-between gap-6">
                  <div className="flex flex-col space-y-1.5 w-[850px]">
                    <Label htmlFor="location">
                      Location of your enterprise
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Paris, France"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 flex-1">
                    <Label htmlFor="department">
                      Region of your enterprise
                    </Label>
                    <Select
                      id="region"
                      value={formData.region}
                      name="region"
                      onValueChange={handleSelectChangeRegion}
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="Region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="ARA">
                            Auvergne-Rhône-Alpes (ARA)
                          </SelectItem>
                          <SelectItem value="BFC">
                            Bourgogne-Franche-Comté (BFC)
                          </SelectItem>
                          <SelectItem value="BRE">Bretagne (BRE)</SelectItem>
                          <SelectItem value="CVL">
                            Centre-Val de Loire (CVL)
                          </SelectItem>
                          <SelectItem value="COR">Corse (COR)</SelectItem>
                          <SelectItem value="GES">Grand Est (GES)</SelectItem>
                          <SelectItem value="HDF">
                            Haut-de-France (HDF)
                          </SelectItem>
                          <SelectItem value="IDF">
                            Île-de-France (IDF)
                          </SelectItem>
                          <SelectItem value="NOR">Normandie (NOR)</SelectItem>
                          <SelectItem value="NAQ">
                            Nouvelle-Aquitaine (NAQ)
                          </SelectItem>
                          <SelectItem value="OCC">Occitanie (OCC)</SelectItem>
                          <SelectItem value="PDL">
                            Pays de la Loire (PDL)
                          </SelectItem>
                          <SelectItem value="PAC">
                            Provence-Alpes-Côte d'Azur (PAC)
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button type="submit" className="mt-4">
                Submit your job offer
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
