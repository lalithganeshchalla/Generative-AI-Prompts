// import React from 'react'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import PersonIcon from '@mui/icons-material/Person';
// import Person2Icon from '@mui/icons-material/Person2';
// import PetsIcon from '@mui/icons-material/Pets';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ChildCareIcon from '@mui/icons-material/ChildCare';
// const Buttons = ({ selectedCategory , setSelectedCategory }) => {

//     const categories = [
//     { label: "All", icon: <PeopleAltIcon />, count: 33 },
//     { label: "Men", icon: <PersonIcon /> , count: 21 },
//     { label: "Women", icon: <Person2Icon /> , count: 10 },
//     { label: "Couples", icon: <FavoriteIcon />, count: 2 },
//     { label: "Kids", icon: <ChildCareIcon />, count: 3 },
//     { label: "Animals", icon: <PetsIcon/> , count: 4 },
//     ];
//   return (
//     <div style={{padding:'20px',paddingLeft:'100px',paddingRight:'100px', display:'flex', justifyContent:'center',overflowX:'auto',whiteSpace:'nowrap'}}>
//          <Stack  spacing={1} direction="row" justifyContent="center" mb={1} sx={{ display: 'inline-flex' }}>
//             {categories.map((category) => (
//               <div key={category.label} style={{ textAlign: "center" }}>
//                 <Button 
//                 key={category.label} 
//                 variant={selectedCategory === category.label ? "contained" : "outlined"} 
//                 sx={{ width: 25, height: 63 , borderColor:'#008080ff', borderRadius:'30px' }}
//                 onClick={() => setSelectedCategory(category.label)}
//                 // startIcon={category.icon}
//                 >
//                   {category.icon}
//                   </Button>
//                   <Typography variant="caption" display="block" gutterBottom
//                   sx={{ color: '#676767ff', fontWeight: 'bold' , paddingTop:'5px'}}
//                   >
//                   {category.label}
//                   </Typography>
//                   </div>
//             ))}
//         </Stack>
//     </div>
//   )
// }

// export default Buttons;

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
    <div
  style={{
    padding: "10px 0",
    display: "flex",
    justifyContent: "flex-start",  // ✅ don’t center, let scroll start at left
    overflowX: "auto",
  }}
>
  <Stack
    spacing={2}
    direction="row"
    sx={{
      flexWrap: "nowrap",
      px: 2,   // ✅ gives breathing room on left & right
    }}
  >
    {categories.map((category) => (
      <div key={category.label} style={{ textAlign: "center" }}>
        <Button
          variant={selectedCategory === category.label ? "contained" : "outlined"}
           sx={{
    width: 60,           // ✅ same width & height
    height: 60,          // ✅ makes it a circle
    borderRadius: "50%", // ✅ full round
    borderColor: "#008080ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0           // ✅ prevents default MUI minWidth
  }}
          onClick={() => setSelectedCategory(category.label)}
        >
          {category.icon}
        </Button>
        <Typography
          variant="caption"
          display="block"
          sx={{ color: "#676767ff", fontWeight: "bold", mt: 0.5 }}
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
