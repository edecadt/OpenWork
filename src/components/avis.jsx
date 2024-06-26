"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
const renderStarRating = (star) => {
  const filledStars = [];
  const emptyStars = [];

  for (let i = 0; i < star; i++) {
    filledStars.push(<Star key={i} className="text-blue-500 fill-blue-500" />);
  }
  for (let i = star; i < 5; i++) {
    emptyStars.push(<Star key={i} />);
  }
  return (
    <>
      {filledStars}
      {emptyStars}
    </>
  );
};
const Avis = () => {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    fetch("/api/getAvis")
        .then((response) => response.json())
        .then((data) => {
          setGridData(data);
          console.log("Data fetched:", data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }, []);

  const avisContainer = {
    position: "relative",
    top: "-300px",
    width: "100%",
    height: "300px",
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const avisContent = {
    textAlign: "center",
  };

  const avisText = {
    position: "absolute",
    top: "50px",
    left: "42.5%",
    fontFamily: "Inter, sans-serif",
    fontSize: "36px",
  };

  const carouselStyle = {
    position: "absolute",
    top: "150px",
    left: "300px",
    width: "1300px",
  };

  // Fonction pour diviser le contenu en morceaux de 50 caractères
  function splitContent(content) {
    const chunks = [];
    for (let i = 0; i < content.length; i += 125) {
      chunks.push(content.substring(i, i + 125));
    }
    return chunks;
  }

  return (
      <div style={avisContainer}>
        <div style={avisContent}>
          <p style={avisText}>Clients Testimonial</p>
          <Carousel style={carouselStyle}>
            <CarouselContent>
              {/* Mapper sur les données de grille pour générer les éléments CarouselItem */}
              {gridData.map((avis, index) => (
                  <CarouselItem key={index}>
                    <div className={"flex flex-col"}>
                      {splitContent(avis.content).map((chunk, i) => (
                          <p key={i}>{chunk}</p>
                      ))}
                      <div className={"flex flex-row justify-center"}>
                        {renderStarRating(avis.star)}
                      </div>
                    </div>
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className={"pt-7"}>
              <Link href={"/Avis"}>
                <Button>Send your opinion</Button>
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
  );
};


export default Avis;
