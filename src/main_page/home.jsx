import React, {useState} from 'react'
import Header from '../components/header'
import Buttons from '../components/buttons'
import Cards from '../components/cards'
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

    <Cards
    
    data={filterData}
    />
    </>
  )
}

export default Home