import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Banner() {
  return (
    <div
      style={{ position: "relative", textAlign: "center", color: "white" }}
    >
      {/* Picture below the navbar */}
      <img
        src={require("../images/Image (1).jpg")}
        alt="Children Vaccine Management & Notification Portal"
        style={{ width: "100%", height: "auto" }}
      />
      {/* Text overlay in the middle of the image */}
      <Typography
        variant="h4"
        component="div"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          padding: "10px",
        }}
      >
        Children Vaccine Management 
        & Notification Portal
      </Typography>
      {/* Container for the button */}
      <div
        style={{
          position: "absolute",
          top: "65%", // Adjust the percentage to position the container below the text
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          width: "100%", // Ensure the button is centered below the text
        }}
      >
        <Button
          variant="contained"
        //   color="primary"
          style={{
            backgroundColor: "#6bc6b6",
            color: "black",
            border: "none",
            borderRadius: "15px"
          }}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
}

export default Banner;
