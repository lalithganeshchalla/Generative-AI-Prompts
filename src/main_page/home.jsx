import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Buttons from "../components/buttons";
import Cards from "../components/cards";
import { Typography } from "@mui/material";
import cardsData from "../components/prompts/data";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterData =
    selectedCategory === "All"
      ? cardsData
      : cardsData.filter(
          (card) => card.tag?.toLowerCase() === selectedCategory.toLowerCase()
        );

  // ✅ Load AdSense script once
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("AdSense error:", e);
    }
  }, [selectedCategory]);

  return (
    <>
      <Header />

      <Buttons
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Typography variant="h6" align="center" gutterBottom>
        {selectedCategory} Prompts
      </Typography>

      {/* ✅ Google AdSense */}
      <div style={{ margin: "20px auto", textAlign: "center" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5889684785099263" // 🔴 replace with your publisher ID
          data-ad-slot="1234567890"        // 🔴 replace with your Ad Unit slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      <Cards data={filterData} />
    </>
  );
};

export default Home;