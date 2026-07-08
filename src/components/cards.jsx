import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Stack, Chip } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import { getCategoryStyle } from '../theme';

const Cards = ({ data = [] }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ px: 2, pb: 4 }}>
      {data.map((card, index) => {
        const style = getCategoryStyle(card.tag);
        const isHovered = hoveredIndex === index;
        return (
          <Grid key={index}>
            <Card
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                borderRadius: "20px",
                maxWidth: 300,
                margin: 'auto',
                padding: '4px',
                background: isHovered ? style.grad : '#fff',
                boxShadow: isHovered
                  ? `0 16px 32px ${style.solid}44`
                  : '0 4px 16px rgba(0,0,0,0.06)',
                transform: isHovered ? 'translateY(-6px)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <Card sx={{ borderRadius: '16px', boxShadow: 'none' }}>
                <CardMedia
                  component="img"
                  height="420"
                  image={card.img}
                  alt="Card Image"
                  sx={{ borderRadius: "14px 14px 0 0" }}
                />
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                    <Chip
                      label={copiedIndex === index ? "Copied!" : card.tag || "General"}
                      size="small"
                      sx={{
                        background: copiedIndex === index ? '#22C55E' : style.grad,
                        color: '#fff',
                        fontWeight: 600,
                        border: 'none',
                      }}
                    />
                    <Button size="small" onClick={() => handleCopy(card.text, index)} sx={{ color: style.solid }}>
                      <ContentCopyIcon fontSize="small" />
                    </Button>
                  </Stack>

                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontFamily: "'Inter', sans-serif",
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

                  <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
                    <Typography variant="caption" color="textSecondary">
                      <CollectionsOutlinedIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: 4 }} />
                      AI Prompt
                    </Typography>
                    <Button
                      size="small"
                      onClick={() => handleCopy(card.text, index)}
                      sx={{
                        textTransform: "none",
                        fontWeight: 700,
                        color: style.solid,
                      }}
                    >
                      {copiedIndex === index ? "Copied!" : "Copy Prompt"}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cards;