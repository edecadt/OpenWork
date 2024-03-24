"use client";
import { Search, MapPin } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";

const getGridStyles = () => {
  return {
    title: { marginTop: "20px", marginLeft: "20px", fontWeight: '550' },
    type: { marginTop: "10px", marginLeft: "22px", color: "#0BA02C", fontWeight: 'bold', fontSize: '13px' },
    salary: { marginTop: "-20px", marginLeft: "120px", color: "#767F8C", fontSize: '13px' },
    company: { marginTop: "20px", marginLeft: "90px", fontWeight: '450' },
    location: { marginTop: "5px", marginLeft: "90px", color: "#767F8C" },
    image: { marginTop: "20px", marginLeft: "20px" },
    typebg: { position: "absolute", backgroundColor: "#E7F6EA", width: "90px", height: "20px", borderRadius: "5px", top: "54px", left: "15px" }
  };
};

const MyPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const buttonProps = {
    width: "131px",
    height: "50px",
    backgroundColor: "#0A65CC",
    color: "white",
    border: "none",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    borderRadius: "4px",
    marginLeft: "89%",
  };

  const inputStyle = {
    position: "absolute",
    height: "50px",
    width: "580px",
    zIndex: "2",
    border: "none",
    borderRadius: "2px",
  };

  const gridData = [
    {
      title: "NTM LUCA",
      type: "PART-TIME",
      salary: "$20,000",
      image: "ggl.png",
      company: "Google Inc.",
      location: "Lille, France",
      styles: getGridStyles()
    },
    {
      title: "NTM LUCA",
      type: "PART-TIME",
      salary: "$20,000",
      image: "ggl.png",
      company: "Google Inc.",
      location: "Lille, France",
      styles: getGridStyles()
    },
  ];

  return (
    <div className="page-container">
      <div className="rectangle-container">
        <div
          className="rectangle"
          style={{
            position: "absolute",
            left: "300px",
            top: "238px",
            width: "1320px",
            height: "72px",
            backgroundColor: "#FFFFFF",
            zIndex: "1",
            border: "1px solid #E4E5E8",
            borderRadius: "10px",
          }}
        >
          <Search
            size={27}
            style={{
              position: "absolute",
              left: "12px",
              top: "20px",
              zIndex: "2",
              color: "#0A65CC",
            }}
          />
          <Input
            style={{
              ...inputStyle,
              left: "50px",
              top: "10px",
            }}
            placeholder="Job tittle, Position, Keyword..."
          />
          <div
            style={{
              position: "absolute",
              left: "642px",
              top: "0px",
              width: "1px",
              height: "71px",
              backgroundColor: "#E4E5E8",
            }}
          ></div>
          <MapPin
            size={27}
            style={{
              position: "absolute",
              left: "652px",
              top: "20px",
              zIndex: "2",
              color: "#0A65CC",
            }}
          />
          <Input
            style={{
              ...inputStyle,
              left: "690px",
              top: "10px",
              width: "470px",
            }}
            placeholder="City, Region or zip-code..."
          />
          <Button style={buttonProps}>Fin job</Button>
        </div>
      </div>
      {gridData.map((item, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            border: "1px solid #E4E5E8",
            borderRadius: "10px",
            height: "170px",
            width: "425px",
            left: `${300 + (index % 3) * 450}px`,
            top: `${400 + Math.floor(index / 3) * 220}px`,
          }}
        >
            <p style={item.styles.title}>{item.title}</p>
          <div style={item.styles.typebg} />
          <div style={{ position: "relative" }}>
            <p style={item.styles.type}>{item.type}</p>
          </div>
          <p style={item.styles.salary}>{item.salary}</p>
          <p style={item.styles.company}>{item.company}</p>
          <p style={item.styles.location}>{item.location}</p>
          <img src={item.image} style={{ width: '100%', height: 'auto', marginTop: "-20px", marginLeft: "20px" }} />
        </div>
      ))}
    </div>
  );
};

export default MyPage;
