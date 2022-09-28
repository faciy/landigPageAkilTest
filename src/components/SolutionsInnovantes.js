import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Team from "../assets/Team.png";

const SolutionsInnovantes = () => {
  return (
    <Box sx={{ backgroundColor: "#003168", height: "855px", marginTop: 10 }}>
      <Box sx={{ marginTop: 3, paddingInline: 12, marginTop: 10 }}>
        <Grid container spacing={0.2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "500px",
                paddingInline: 10,
                marginTop: 10,
              }}
            >
              <Typography
                sx={{ fontSize: 25, color: "white", fontWeight: "bold" }}
              >
                Solutions innovantes, Etat <br />
                d'esprit numérique
              </Typography>
              <Typography sx={{ color: "white", fontSize: 15, marginTop: 5 }}>
                Nous sommes avant tout des femmes et des hommes de métiers avant
                d’être des ingénieurs en génie logiciel. <br /> <br />
                Nos applications permettent aux entreprises de changer
                fondamentalement de modèle et de devenir plus agiles, efficaces
                et rentables. <br /> <br />
                Chez AKIL, nous souhaitons établir un partenariat avec vous. En
                tant que service d'ingénierie, nous exécutons vos idées dans des
                applications Web et mobiles <br /> <br />
                Nous fournissons un excellent service de développement de
                logiciels pour créer des applications innovantes.
              </Typography>
              <Box>
                <Button
                  sx={{ backgroundColor: "white", marginTop: 5 }}
                  variant="contained"
                >
                  <Typography
                    sx={{ color: "#003168", textTransform: "capitalize" }}
                  >
                    J'ai un projet
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "500px",
                paddingInline: 10,
              }}
            >
              <Box>
                <img src={Team} width="100%" height="90%" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#0E224E",
          height: "198px",
          paddingInline: 22,
          marginTop: 6,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft:22,
          marginRight:22
        }}
      >
        <Box>
          <Typography sx={{textAlign:'center',fontSize:30,color:'white'}}>1244</Typography>
          <Typography sx={{textAlign:'center',fontSize:25,color:'white',opacity: 0.8}}>Porjets</Typography>
        </Box>
        <Box>
          <Typography sx={{textAlign:'center',fontSize:30,color:'white'}}>34552</Typography>
          <Typography sx={{textAlign:'center',fontSize:25,color:'white',opacity: 0.8}}>Clients staisfaits</Typography>
        </Box>
        <Box>
          <Typography sx={{textAlign:'center',fontSize:30,color:'white'}} >50</Typography>
          <Typography sx={{textAlign:'center',fontSize:25,color:'white',opacity: 0.8}}>Développeurs</Typography>
        </Box>
        <Box>
          <Typography sx={{textAlign:'center',fontSize:30,color:'white'}}>45</Typography>
          <Typography sx={{textAlign:'center',fontSize:25,color:'white',opacity: 0.8}}>applications réalisés</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SolutionsInnovantes;
