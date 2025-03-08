import React from "react";
import { Container, Typography, Paper } from "@mui/material";

function ResumePreview() {
  const formData = JSON.parse(localStorage.getItem("resumeData")) || {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    education: "Bachelor's in Computer Science",
    experience: "Software Developer at XYZ Company",
    skills: "React, JavaScript, Node.js"
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h4" gutterBottom>
          Resume Preview
        </Typography>
        <Typography variant="h6">Name: {formData.name}</Typography>
        <Typography>Email: {formData.email}</Typography>
        <Typography>Phone: {formData.phone}</Typography>
        <Typography>Education: {formData.education}</Typography>
        <Typography>Experience: {formData.experience}</Typography>
        <Typography>Skills: {formData.skills}</Typography>
      </Paper>
    </Container>
  );
}

export default ResumePreview;
