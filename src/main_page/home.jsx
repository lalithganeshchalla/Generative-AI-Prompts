import React, {useState} from 'react'
import Header from '../components/header'
import Buttons from '../components/buttons'
import Cards from '../components/cards'
import { Typography } from '@mui/material';
import cardsData from '../components/prompts/data'
import AdsenseAd from '../components/AdsenseAd';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");


    const filterData = 
    selectedCategory === "All"
    ? cardsData
    : cardsData.filter((card) => card.tag?.toLowerCase() === selectedCategory.toLowerCase());
  return (
    <div>
    <Header/>

    <Buttons
    selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
    />
    
    <Typography variant="h6" align="center" gutterBottom>
      {selectedCategory} Prompts
    </Typography>
    <AdsenseAd 
        adClient="ca-pub-5889684785099263"
        adSlot="5880516949" 
      />
    <Cards
    
    data={filterData}
    />
    </div>
  )
}

export default Home