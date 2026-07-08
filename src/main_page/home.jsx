import React, { useState } from 'react'
import Header from '../components/header'
import Buttons from '../components/buttons'
import Cards from '../components/cards'
import { Typography, CircularProgress, Box } from '@mui/material';
import AdsenseAd from '../components/AdsenseAd';
import { usePrompts } from '../hooks/usePrompts';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { prompts, loading, error } = usePrompts();

  const filterData =
    selectedCategory === "All"
      ? prompts
      : prompts.filter(
          (card) => card.tag?.toLowerCase() === selectedCategory.toLowerCase()
        );

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

      <AdsenseAd 
    adClient="ca-pub-2818707013005902"   
    adSlot="5880516949" 
      />

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography align="center" color="error" mt={4}>
         
An error occurred while loading the prompts. Please refresh.
        </Typography>
      ) : (
        <Cards data={filterData} />
      )}
    </>
  )
}

export default Home