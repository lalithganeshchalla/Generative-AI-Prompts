import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChildCareIcon from '@mui/icons-material/ChildCare';
const Buttons = ({ selectedCategory , setSelectedCategory }) => {

    const categories = [
    { label: "All", icon: <PersonIcon /> },
    { label: "Men", icon: <MaleIcon /> },
    { label: "Women", icon: <FemaleIcon /> },
    { label: "Couples", icon: <FavoriteIcon /> },
    { label: "Kids", icon: <ChildCareIcon /> },
    { label: "Others", icon: null },
    ];
  return (
    <div style={{padding:'20px',paddingLeft:'50px', display:'flex', justifyContent:'center',overflowX:'auto',whiteSpace:'nowrap'}}>
         <Stack  spacing={1} direction="row" justifyContent="center" mb={1} sx={{ display: 'inline-flex' }}>
            {categories.map((category) => (
                <Button 
                key={category.label} 
                variant={selectedCategory === category.label ? "contained" : "outlined"} 
                sx={{ width: 90, height: 35, fontSize: '10px' , borderColor:'#008080ff', borderRadius:'20px' }}
                onClick={() => setSelectedCategory(category.label)}
                startIcon={category.icon}
                >
                  {category.label}
                  </Button>
            ))}
        </Stack>
    </div>
  )
}

export default Buttons;