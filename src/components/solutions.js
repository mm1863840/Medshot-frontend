import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CircularProgress } from "@mui/material";

function SemiCircularProgress({ value }) {
  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        style={{ transform: "rotate(130deg)" }}
        size={80}
      />
      <CircularProgress
        variant="determinate"
        value={100 - value}
        style={{
          color: "lightgray",
          position: "absolute",
          left: 0,
          transform: "rotate(-45deg)",
        }}
        size={80}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="caption" component="div" color="textSecondary">
          Completed
        </Typography>
      </div>
    </div>
  );
}

function Solution() {
  return (
    <div
      style={{ position: "relative", textAlign: "center", color: "white" }}
    >
      {/* Picture below the navbar */}
      <img
        src={require("../images/Image 14.jpg")}
        alt="Children Vaccine Management & Notification Portal"
        style={{ width: "100%", height: "auto" }}
      />
      {/* Text overlay in the middle of the image */}
      <Typography
        variant="h5"
        component="div"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          padding: "10px",
        }}
      >
        Solutions to your struggling
      </Typography>
      {/* Paragraph below the heading */}
      <Typography
        variant="body1"
        component="div"
        style={{
          position: "absolute",
          top: "30%", // Position the paragraph below the heading
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          padding: "10px",
          textDecoration: "bold",
        }}
      >
        The system may send automated reminders to parents/guardians about
        upcoming vaccination dates via SMS, email, or app notifications. The
        system allows scheduling of appointments at healthcare facilities,
        ensuring that the child gets vaccinated on time.
      </Typography>
      {/* Container for the cards */}
      <div
        style={{
          position: "absolute",
          top: "70%", // Position the cards below the paragraph
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "space-evenly",
          width: "80%", // Adjust width as needed
        }}
      >
        {/* Card 1 */}
        <Card style={{ width: "300px", borderRadius: "16px" }}>
          <CardContent>
            <Typography variant="h6" component="div" align="center">
              Team Medshot
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SemiCircularProgress value={72} />
            </div>
            <Typography
              variant="h4"
              component="div"
              align="center"
              style={{ marginTop: "10px" }}
            >
              72%
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              style={{ marginTop: "10px", }}
            >
              10k Plus Appointment Completed
            </Typography>
          </CardContent>
        </Card>
        {/* Card 2 */}
        <Card style={{ width: "300px", borderRadius: "16px" }}>
          <CardContent>
            <Typography variant="h6" component="div" align="center">
              Team Medshot
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SemiCircularProgress value={72} />
            </div>
            <Typography
              variant="h4"
              component="div"
              align="center"
              style={{ marginTop: "10px" }}
            >
              72%
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              style={{ marginTop: "10px" }}
            >
              10k Plus Appointment Completed
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Solution;
