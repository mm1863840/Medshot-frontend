import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Import images
import Image145 from "../images/Image 145.jpg";
import Container20 from "../images/Container 20.jpg";
import Container201 from "../images/Container 20 (1).jpg";
import Container202 from "../images/Container 20 (2).jpg";

function GetAppointmentForm() {
  return (
    <Box>
      {/* Flexbox container for the heading and image */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#d7e2e0"
        }}
      >
        {/* Heading on the left */}
        <div style={{ flex: 1, marginLeft: "20px" }}>
          <Typography
            variant="h5"
            component="div"
            style={{
              color: "black",
              textAlign: "center",
              textDecoration: "bold",
            }}
          >
            Childhood Vaccination and
            <br />
            Alert System
          </Typography>
          {/* Additional text below the existing heading */}
          <Typography
            variant="body1"
            component="div"
            style={{
              marginTop: "10px",
              color: "gray",
              textAlign: "center",
            }}
          >
            A child vaccination care system is primarily evaluated based on its
            ability to provide prompt, secure, and well-organized immunization
            services.
          </Typography>
          {/* New Button below the additional text */}
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "lightblue",
                color: "black",
                borderRadius: "12px", // Adjust the value for more or less rounding
              }}
            >
              Submit
            </Button>
          </div>
        </div>
        {/* Separate divs for Image and Text */}
        <div style={{ flex: 1, textAlign: "center", marginRight: "20px" }}>
          {/* Image container */}
          <div>
            <img
              src={Image145}
              alt="Your descriptive alt text"
              style={{ width: "80%", height: "50%" }}
            />
          </div>
          {/* Text container for heading */}
          <div>
            <Typography
              variant="h3"
              component="div"
              style={{
                marginTop: "10px",
                color: "black",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "50%"
              }}
            >
              Our Services
            </Typography>
          </div>
        </div>
      </div>

      {/* Featured Services Section */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#e0e0e0", // Optional background color for the cards section
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={3}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={Container20}
                alt="Service 1"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={Container201}
                alt="Service 2"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={Container202}
                alt="Service 3"
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default GetAppointmentForm;
