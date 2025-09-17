import React, {useState} from 'react'
import Header from '../components/header'
import Buttons from '../components/buttons'
import Cards from '../components/cards'
import { Typography } from '@mui/material';
import cardsData from '../components/prompts/data'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");


    const filterData = 
    selectedCategory === "All"
    ? cardsData
    : cardsData.filter((card) => card.tag?.toLowerCase() === selectedCategory.toLowerCase());
  return (
    <>
    <Header/>

    <Buttons
    selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
    />
    <Typography variant="h6" align="center" gutterBottom>
      {selectedCategory} Prompts
    </Typography>

    <Cards
    
    data={filterData}
    />
    </>
  )
}

export default Home