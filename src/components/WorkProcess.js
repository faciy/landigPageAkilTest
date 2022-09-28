import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import Image1 from "../assets/Image1.png";
import idée from "../assets/idée.png";
import Work from "../assets/Work.png";
import rond from "../assets/rond.png";

const WorkProcess = () => {
  return (
    <Box sx={{ backgroundColor: "#FBFBFB", height: "850px", marginTop: 30 }}>
      <Typography
        sx={{
          fontSize: 30,
          textAlign: "center",
          marginTop: 10,
          color: "#003168",
          fontWeight: "bold",
        }}
      >
        Processus de travail
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#636262",
          marginTop:3
        }}
      >
        Notre processus de travail <br />
        Toutes la difference reside dans notre processus de travail sans faill
      </Typography>
      <Box sx={{ marginTop: 3, paddingInline: 12 , marginTop:10}}>
        <Grid container spacing={0.2}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: "500px",
                paddingInline: 10,
              }}
            >
              <img src={Image1} width={100} height={100} />
              <Box sx={{ marginTop: 5 }}>
                <img src={rond} width={10} height={10} />
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <Typography sx={{fontWeight:'bold'}} >
                  Cadrage et Etude de <br /> faisabilité
                </Typography>
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <Typography>
                  Nous échangeons avec vous pour <br />
                  mieux cerner vos besoins, vos idées <br />
                  sont transmises à nos ingénieurs pour <br />
                  une offre qui repond à vos attentes
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: "500px",
                paddingInline: 10,
              }}
            >
              <img src={idée} width={100} height={100} />
              <Box sx={{ marginTop: 5 }}>
                <img src={rond} width={10} height={10} />
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <Typography sx={{fontWeight:'bold'}}>
                  Idéation et proposition <br /> de Designs
                </Typography>
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <Typography>
                  Nous échangeons avec vous pour <br />
                  mieux cerner vos besoins, vos idées <br />
                  sont transmises à nos ingénieurs pour <br />
                  une offre qui repond à vos attentes
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: "500px",
                paddingInline: 10,
              }}
            >
              <img src={Work} width={100} height={100} />
              <Box sx={{ marginTop: 5 }}>
                <img src={rond} width={10} height={10} />
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <Typography sx={{fontWeight:'bold'}}>
                  Développement Agile <br /> par la méthode <br /> Scrum
                </Typography>
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <Typography>
                  Nous échangeons avec vous pour <br />
                  mieux cerner vos besoins, vos idées <br />
                  sont transmises à nos ingénieurs pour <br />
                  une offre qui repond à vos attentes <br />
                  Nous échangeons avec vous pour <br />
                  mieux cerner vos besoins, vos idées <br />
                  sont transmises à nos ingénieurs pour <br />
                  une offre qui repond à vos attentes <br />
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WorkProcess;
