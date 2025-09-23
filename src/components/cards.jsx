import React , {useState} from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, Button,Stack,Chip, } from "@mui/material";
//import cardsData from "./prompts/data"; 
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
const Cards = ({data = []}) => {
      const [copiedIndex, setCopiedIndex] = useState(null);
     const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
        setCopiedIndex(index); // mark this card as copied
      setTimeout(() => setCopiedIndex(null), 2000);
    });
    
  };
  return (
    <Grid container spacing={3} justifyContent="center">
  {data.map((card, index) => (
    <Grid key={index} sx={{
    xs: 12,
    sm: 6,
    md: 4
  }}>
      {/* xs=12 → 1 column on mobile 
          sm=6  → 2 columns on tablets
          md=3  → 4 columns on desktop */}
      <Card sx={{ borderRadius: "16px", boxShadow: 3 , maxWidth: 300, margin: 'auto' , padding:'10px', }}>
        <CardMedia
          component="img"
        //   width="100"
          height="420"
          image={card.img}
          alt="Card Image"
            sx={{ borderRadius: "12px" }}
        />
        <CardContent>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Chip
                  label={copiedIndex === index ? "Copied!" : card.tag || "General"} // tag comes from data
                  size="small"
                  variant="outlined"
                  color={copiedIndex === index ? "success" : "default"}
                />
                <Button size="small" 
               onClick={() => handleCopy(card.text, index)}
                >
                  <ContentCopyIcon fontSize="small" />
                </Button>
              </Stack>
          <Typography variant="body2" gutterBottom
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: '60px',
          }}
          >
            {card.text}
          </Typography>
          
         <Stack
         direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
            >
            <Typography variant="caption" color="textSecondary"
            >
               <CollectionsOutlinedIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: 4 }} />
                AI Prompt
            </Typography>
             <Button
                  size="small"
                  onClick={() => handleCopy(card.text, index)}
                  sx={{ textTransform: "none", color: "purple" }}
                  //startIcon={<ContentCopyIcon fontSize="small" />}
                >
                  {copiedIndex === index ? "Copied!" : "Copy Prompt"}
                </Button>
            </Stack>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
  )
};

export default Cards