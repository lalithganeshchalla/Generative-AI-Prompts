// src/components/AddCardForm.jsx
import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const AddCardForm = ({ addCard }) => {
  const [img, setImg] = useState("");
  const [tag, setTag] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (img && tag && text) {
      addCard({ img, tag, text });
      setImg(""); setTag(""); setText("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        label="Image URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Text / Prompt"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">Add Card</Button>
    </Box>
  );
};

export default AddCardForm;
