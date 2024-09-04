import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import oppositeLogo from "./images/logo.jpeg"; // Ensure the path is correct
import LanguageIcon from "@mui/icons-material/Language";
import Brightness2Icon from "@mui/icons-material/Brightness2"; // Import moon icon
import GetAppointmentForm from "./components/appointment";
import ResponsiveAppBar from "./components/navbar";
import Banner from "./components/banner";
import Solutions from "./components/solutions";
import Footer from "./components/footer";



function App() {
  return (
    <>
    <div className="App">
      <ResponsiveAppBar />
      <Banner></Banner>
      <GetAppointmentForm></GetAppointmentForm>
      <Solutions></Solutions>
      <Footer></Footer>

    </div>
    </>
  );
}


export default App;
