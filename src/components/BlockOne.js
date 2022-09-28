import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Akileur from "../assets/Akileur.png";

const BlockOne = () => {
  return (
    <Box sx={{ paddingInline: { md: 10, xs: 2 }, marginTop: 20 }}>
      <Box sx={{}}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '250px', paddingInline: 12 }}>
              <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>
                Nos technologies, des <br /> solutions d'automatisations <br />{" "}
                de vos procéssus métiers
              </Typography>
              <Typography sx={{ fontSize: 20, marginTop: 2 }}>
                Nous mettons en place avec vous, des <br /> solutions sur mesure
                pour faire face à vos <br /> défis commerciaux
              </Typography>
              <Button
                sx={{ backgroundColor: "#003168", marginTop: 2 }}
                variant="contained"
              >
                J'ai un projet
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '250px', paddingInline: 12 }}>
              <img
                src={Akileur}
                alt={"photo"}
                loading="lazy"
                width="100%"
                height="150%"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BlockOne;
