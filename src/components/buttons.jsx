import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Buttons = ({selectedCategory,setSelectedCategory}) => {

    const categories = ["All", "Male", "Female" , "Coples"]
  return (
    <div style={{padding:'10px', display:'flex', justifyContent:'center'}}>
         <Stack  spacing={2} direction="row" justifyContent="center" mb={3}>
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