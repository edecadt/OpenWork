"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreatePost() {
  const session = useSession();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState(0);
  const [department, setDepartment] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");
  const form = useForm();

  console.log(session);

  if (!session) {
    router.push("/auth/login");
    return null;
  }

  const handleSubmit = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen"></div>
  );
}
