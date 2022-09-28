import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import AKILgirl from "../assets/AKILgirl.png";
import cradAbout from "../assets/cradAbout.png";
import CheckIcon from "@mui/icons-material/Check";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#003168",
        marginTop: 25,
        height: "980px",
        paddingInline: { md: 10, xs: 2 },
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Box sx={{ height: "814px", paddingInline: 12, marginTop: 10 }}>
            <Box
              style={{ backgroundImage: `url(${AKILgirl})`, height: "100%" }}
            >
              <Box sx={{ position: "absolute", marginTop: 40, left: 150 }}>
                <img src={cradAbout} width="40%" height="30%" />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "814px",
              paddingInline: 12,
              marginTop: 9,
            }}
          >
            <Typography
              sx={{ fontSize: 25, color: "white", fontWeight: "bold" }}
            >
              A propos de nous
            </Typography>
            <Typography sx={{ color: "#ededed", marginTop: 3 }}>
              <p>
                AKIL Technologies est une société de services en ingénierie
                informatique (SS2I) dont le siège social est situé à Abidjan et
                qui possède des bureaux affiliés à Paris et à Washington DC.
              </p>{" "}
              Depuis notre création en 2015, nous avons fourni une large gamme
              de services pour l’automatisation et la transformation digitale
              des différentes Institutions de l’Etat Ivoirien, de Grandes
              entreprises, de PME, et de startups de par le monde. Ces services
              incluent le Software engineering, le conseil et l’assistance
              informatique, la mise en œuvre de solutions spécifiques et le
              pilotage de projets
            </Typography>
            <Box sx={{ display: "flex", marginTop: 3 }}>
              <CheckIcon color="success" />
              <Box sx={{ right: 10 }}>
                <Typography sx={{ color: "white" }}>
                  Excellente solution pour les entreprises
                  <Typography sx={{ fontSize: 12, opacity: 0.8 }}>
                    Nous fournissons un excellent service de développement{" "}
                    <br /> de logiciels pour créer des applications innovantes{" "}
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginTop: 3 }}>
              <CheckIcon color="success" />
              <Box sx={{ right: 10 }}>
                <Typography sx={{ color: "white" }}>
                  Satisfaction des clients
                  <Typography sx={{ fontSize: 12, opacity: 0.8 }}>
                    Avec nos méthodes et méthodologies, nos clients sont <br />{" "}
                    satisfaits et deviennent nos ambassadeurs dans leurs <br />{" "}
                    réseaux professionnels
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginTop: 3 }}>
              <CheckIcon color="success" />
              <Box sx={{ right: 10 }}>
                <Typography sx={{ color: "white" }}>
                  Equipe Expérimentée
                  <Typography sx={{ fontSize: 12, opacity: 0.8 }}>
                    Les skills de nos membres sont aux normes <br />{" "}
                    internationales. Fort de leurs expériences, ils s'adaptent à{" "}
                    <br /> tout type de terrain et apportent la garantie d'une{" "}
                    <br /> expertise reconnue
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: 5 }}>
              <Button
                sx={{ backgroundColor: "white", marginTop: 2 }}
                variant="contained"
              >
                <Typography sx={{ color: "#003168",textTransform:'capitalize' }}>Voir plus</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
