"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Success() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3); // Initialiser le compte à rebours à 3 secondes

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, countdown * 1000); // Utilisation du compte à rebours pour déterminer le délai

    // Décrémenter le compte à rebours toutes les secondes
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, [countdown]); // Le useEffect dépend du changement du compte à rebours

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 text-white bg-green-500 rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold">Success!</h1>
        <p>Your action was successful.</p>
        <p>This page will redirect to the home page in {countdown} seconds.</p>
      </div>
    </div>
  );
}
