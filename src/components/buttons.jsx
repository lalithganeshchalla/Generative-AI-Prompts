import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import ManIcon from '@mui/icons-material';
import WomanIcon from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Buttons = ({selectedCategory,setSelectedCategory}) => {

    const categories = [
       { label: "All", icon: <PersonIcon /> },
    { label: "Men", icon: <ManIcon /> },
    { label: "Women", icon: <WomanIcon /> },
    { label: "Couples", icon: <FavoriteIcon /> },
    ]
  return (
    <div style={{padding:'20px', display:'flex', justifyContent:'center'}}>
         <Stack  spacing={2} direction="row" justifyContent="center" mb={1}>
            {categories.map((category) => (
                <Button key={category} 
                variant={selectedCategory === category ? "contained" : "outlined"} sx={{ width: 60, height: 20, fontSize: '10px' , borderColor:'#008080ff', borderRadius:'20px' }}
                onClick={() => setSelectedCategory(category)}
                >{category}</Button>
            ))}
        </Stack>
    </div>
  )
}

export default Buttons