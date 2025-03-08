import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Resume Builder</h1>
      <p>Create your professional resume easily.</p>
      <Button variant="contained" color="primary" component={Link} to="/resume-form">
        Get Started
      </Button>
    </div>
  );
}

export default Home;