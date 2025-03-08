import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResumeForm from "./pages/ResumeForm";
import ResumePreview from "./pages/ResumePreview";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

function App() {
  // State to store fetched resume data
  const [resumeData, setResumeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/resume") // Backend API URL
      .then((response) => {
        setResumeData(response.data); // Store the received data
      })
      .catch((error) => {
        console.error("Error fetching resume data:", error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-form" element={<ResumeForm />} />
          <Route path="/resume-preview" element={<ResumePreview />} />
        </Routes>

        {/* Displaying fetched resume data */}
        <div style={{ padding: "20px" }}>
          <h2></h2>
          <ul>
            {resumeData.map((resume, index) => (
              <li key={index}>
                {resume.name} - {resume.email} {/* Modify based on API response */}
              </li>
            ))}
          </ul>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
