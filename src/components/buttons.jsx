import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChildCareIcon from '@mui/icons-material/ChildCare';
const Buttons = ({ selectedCategory , setSelectedCategory }) => {

    const categories = [
    { label: "All", icon: <PeopleAltIcon />, count: 33 },
    { label: "Men", icon: <PersonIcon /> , count: 21 },
    { label: "Women", icon: <Person2Icon /> , count: 10 },
    { label: "Couples", icon: <FavoriteIcon />, count: 2 },
    { label: "Kids", icon: <ChildCareIcon />, count: 3 },
    { label: "Animals", icon: <PetsIcon/> , count: 4 },
    ];
  return (
    <div style={{padding:'20px',paddingLeft:'50px', display:'flex', justifyContent:'center',overflowX:'auto',whiteSpace:'nowrap'}}>
         <Stack  spacing={1} direction="row" justifyContent="center" mb={1} sx={{ display: 'inline-flex' }}>
            {categories.map((category) => (
              <div key={category.label} style={{ textAlign: "center" }}>
                <Button 
                key={category.label} 
                variant={selectedCategory === category.label ? "contained" : "outlined"} 
                sx={{ width: 25, height: 63 , borderColor:'#008080ff', borderRadius:'30px' }}
                onClick={() => setSelectedCategory(category.label)}
                // startIcon={category.icon}
                >
                  {category.icon}
                  </Button>
                  <Typography variant="caption" display="block" gutterBottom
                  sx={{ color: '#676767ff', fontWeight: 'bold' , paddingTop:'5px'}}
                  >
                  {category.label}
                  </Typography>
                  </div>
            ))}
        </Stack>
    </div>
  )
}

export default Buttons;