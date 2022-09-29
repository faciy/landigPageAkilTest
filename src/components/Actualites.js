import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Team from "../assets/Team.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Actualites = () => {
  return (
    <Box
      sx={{
        marginTop: 15,
        height: "800px",
        paddingInline: { md: 10, xs: 2 },
      }}
    >
      <Box sx={{ marginTop: 5, display: "flex" }}>
        <Box
          sx={{
            height: "100px",
            paddingInline: 12,
          }}
        >
          <Typography sx={{ fontSize: 30, color: "#003168" }}>
            Actualités
          </Typography>
          <Typography sx={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100px",
            paddingInline: 12,
          }}
        >
          <Button
            sx={{ backgroundColor: "#003168", textTransform: "capitalize" }}
            variant="contained"
          >
            Voir Toute L'actualité
          </Button>
        </Box>
      </Box>

      {/* PARTIE DEUX  */}
      <Box sx={{ paddingInline: 12 }}>
        <Grid container spacing={0.2}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "450px",
                paddingInline: 2,
              }}
            >
              <img src={Team} width={"100%"} height={300} />
              <Typography
                sx={{
                  marginTop: 3,
                }}
              >
                23 janvier 2021
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  marginTop: 3,
                  fontWeight: "bold",
                }}
              >
                Nous vous accompagnons sur l'ensemble <br />
                de la chaine de conception d'un service <br />
                digital. Etude du marché, identification <br />
              </Typography>
              <p>
                du besoin, développement de la situation, <br />
                test, mise en production, <br />
                commercialisation, veille et amélioration continue
              </p>
              <Box sx={{ display: "flex", marginTop: 5 }}>
                <Typography
                  sx={{
                    color: "#003168",
                    fontWeight: "bold",
                  }}
                >
                  Lire l'article
                </Typography>
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "450px",
                paddingInline: 2,
              }}
            >
              <img src={Team} width={"100%"} height={300} />
              <Typography
                sx={{
                  marginTop: 3,
                }}
              >
                23 janvier 2021
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  marginTop: 3,
                  fontWeight: "bold",
                }}
              >
                Nous vous accompagnons sur l'ensemble <br />
                de la chaine de conception d'un service <br />
                digital. Etude du marché, identification <br />
              </Typography>
              <p>
                du besoin, développement de la situation, <br />
                test, mise en production, <br />
                commercialisation, veille et amélioration continue
              </p>
              <Box sx={{ display: "flex", marginTop: 5 }}>
                <Typography
                  sx={{
                    color: "#003168",
                    fontWeight: "bold",
                  }}
                >
                  Lire l'article
                </Typography>
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "450px",
                paddingInline: 2,
              }}
            >
              <img src={Team} width={"100%"} height={300} />
              <Typography
                sx={{
                  marginTop: 3,
                }}
              >
                23 janvier 2021
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  marginTop: 3,
                  fontWeight: "bold",
                }}
              >
                Nous vous accompagnons sur l'ensemble <br />
                de la chaine de conception d'un service <br />
                digital. Etude du marché, identification <br />
              </Typography>
              <p>
                du besoin, développement de la situation, <br />
                test, mise en production, <br />
                commercialisation, veille et amélioration continue
              </p>
              <Box sx={{ display: "flex", marginTop: 5 }}>
                <Typography
                  sx={{
                    color: "#003168",
                    fontWeight: "bold",
                  }}
                >
                  Lire l'article
                </Typography>
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Actualites;
