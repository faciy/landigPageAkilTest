import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import settings from "../assets/settings.png";
import imgOne from "../assets/imgOne.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { display } from "@mui/system";

const Services = () => {
  return (
    <Box
      sx={{
        height: "980px",
        paddingInline: { md: 10, xs: 2 },
      }}
    >
      <Typography
        sx={{
          fontSize: 30,
          textAlign: "center",
          marginTop: 10,
          color: "#003168",
          fontWeight:'bold'
        }}
      >
        Nos services
      </Typography>
      <Box sx={{ marginTop: 10, paddingInline: 12 }}>
        <Grid container spacing={0.2}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "450px",
                paddingInline: 2,
              }}
            >
              <img src={settings} width={70} height={70} />
              <Typography
                sx={{
                  fontSize: 25,
                  color: "#003168",
                  fontWeight: "bold",
                  marginTop: 3,
                }}
              >
                Product Design
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  marginTop: 3,
                }}
              >
                Nous vous accompagnons sur l'ensemble <br />
                de la chaine de conception d'un service <br />
                digital. Etude du marché, identification <br />
                du besoin, développement de la situation, <br />
                test, mise en production, <br />
                commercialisation, veille et amélioration <br />
                continue
              </Typography>
              <Box sx={{ display: "flex", marginTop: 5 }}>
                <Typography
                  sx={{
                    color: "#003168",
                    fontWeight: "bold",
                  }}
                >
                  En savoir plus
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
              <img src={settings} width={70} height={70} />
              <Typography
                sx={{
                  fontSize: 25,
                  color: "#003168",
                  fontWeight: "bold",
                  marginTop: 3,
                }}
              >
                Conseil
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  marginTop: 3,
                }}
              >
                Nous vous accompagnons sur l'ensemble <br />
                de la chaine de conception d'un service <br />
                digital. Etude du marché, identification <br />
                du besoin, développement de la situation, <br />
                test, mise en production, <br />
                commercialisation, veille et amélioration <br />
                continue
              </Typography>
              <Box sx={{ display: "flex", marginTop: 5 }}>
                <Typography
                  sx={{
                    color: "#003168",
                    fontWeight: "bold",
                  }}
                >
                  En savoir plus
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
              <img src={settings} width={70} height={70} />
              <Typography
                sx={{
                  fontSize: 25,
                  color: "#003168",
                  fontWeight: "bold",
                  marginTop: 3,
                }}
              >
                Développement Produit
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  marginTop: 3,
                }}
              >
                Nous vous accompagnons sur l'ensemble <br />
                de la chaine de conception d'un service <br />
                digital. Etude du marché, identification <br />
                du besoin, développement de la situation, <br />
                test, mise en production, <br />
                commercialisation, veille et amélioration <br />
                continue
              </Typography>
              <Box sx={{ display: "flex", marginTop: 5 }}>
                <Typography
                  sx={{
                    color: "#003168",
                    fontWeight: "bold",
                  }}
                >
                  En savoir plus
                </Typography>
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* DEUXIEME BLOC  */}
      <Box sx={{ marginTop: 10, paddingInline: 12 }}>
        <Grid container spacing={0.2}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "450px",
                paddingInline: 2,
              }}
            >
              <img src={settings} width={70} height={70} />
              <Typography
                sx={{
                  fontSize: 25,
                  color: "#003168",
                  fontWeight: "bold",
                  marginTop: 3,
                }}
              >
                Adaptation continue du SI
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  marginTop: 3,
                }}
              >
                Nous vous accompagnons sur l'ensemble <br />
                de la chaine de conception d'un service <br />
                digital. Etude du marché, identification <br />
                du besoin, développement de la situation, <br />
                test, mise en production, <br />
                commercialisation, veille et amélioration <br />
                continue
              </Typography>
              <Box sx={{ display: "flex", marginTop: 5 }}>
                <Typography
                  sx={{
                    color: "#003168",
                    fontWeight: "bold",
                  }}
                >
                  En savoir plus
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
              <img src={settings} width={70} height={70} />
              <Typography
                sx={{
                  fontSize: 25,
                  color: "#003168",
                  fontWeight: "bold",
                  marginTop: 3,
                }}
              >
                Data Science
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  marginTop: 3,
                }}
              >
                Nous vous accompagnons sur l'ensemble <br />
                de la chaine de conception d'un service <br />
                digital. Etude du marché, identification <br />
                du besoin, développement de la situation, <br />
                test, mise en production, <br />
                commercialisation, veille et amélioration <br />
                continue
              </Typography>
              <Box sx={{ display: "flex", marginTop: 5 }}>
                <Typography
                  sx={{
                    color: "#003168",
                    fontWeight: "bold",
                  }}
                >
                  En savoir plus
                </Typography>
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: "450px",
                // paddingInline: 2,
                backgroundImage: `url(${imgOne})`,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#003168",
                  height: "450px",
                  width: "100%",
                  opacity: 0.8,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 30,
                    color: "white",
                    paddingInline: 5,
                    fontWeight: "bold",
                  }}
                >
                  Nous faire <br />
                  confiance pour <br />
                  vos projets
                </Typography>
                <Box sx={{ paddingInline: 5, marginTop: 5 }}>
                  <Button
                    sx={{ backgroundColor: "white", marginTop: 2 }}
                    variant="contained"
                  >
                    <Typography
                      sx={{
                        color: "#003168",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      J'ai un projet
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
