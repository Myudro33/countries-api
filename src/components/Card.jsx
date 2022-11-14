import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Grow } from "@mui/material";

const Card = ({ capital, region, img, population, name, theme }) => {
  const checked = true;
  return (
    <Grid item xs={3}>
      <Link style={{ textDecoration: "none" }} to={`/country/${name}`}>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1500 } : {})}
        >
          <Paper
            sx={{
              backgroundColor: `${theme ? "hsl(207, 26%, 17%)" : "whitesmoke"}`,
              height: "350px",
              color: `${theme ? "white" : "black"}`,
            }}
            elevation={3}
          >
            <img style={{ width: "100%", height: "50%" }} src={img} alt="" />
            <Box
              sx={{ margin: "20px", display: "flex", flexDirection: "column" }}
            >
              <Typography fontWeight={800}>{name}</Typography>
              <Typography
                variant="p"
                sx={{ margin: "5px 0px" }}
                fontWeight={400}
              >
                Population: {population}
              </Typography>
              <Typography
                variant="p"
                sx={{ margin: "5px 0px" }}
                fontWeight={400}
              >
                Region: {region}
              </Typography>
              <Typography
                variant="p"
                fontWeight={400}
                sx={{ margin: "5px 0px" }}
              >
                Capital: {capital}
              </Typography>
            </Box>
          </Paper>
        </Grow>
      </Link>
    </Grid>
  );
};

export default Card;
