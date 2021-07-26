import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../Navbar/Navbar";

import project1 from "../../images/javascript-fullstack.jpg";
import project2 from "../../images/html-css-javascript.jpg";
import project3 from "../../images/html-css-javascript-lg.jpg";
import project4 from "../../images/ionic.png";
import project5 from "../../images/flutter-dart.png";
import project6 from "../../images/uca.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

interface Project {
  name: string;
  description: string;
  linkShare: string;
  linkDemo: string;
  image: string;
};

const projects: Array<Project> = [
  {
    name: 'Slice Rota App',
    description: `
      Aplicación móvil híbrida para pedir comida rápida.
    `,
    linkShare: 'https://play.google.com/store/apps/details?id=io.ionic.slicenewyork&gl=ES',
    linkDemo: 'https://play.google.com/store/apps/details?id=io.ionic.slicenewyork&gl=ES',
    image: project1,
  },
  {
    name: 'The Good Barber',
    description: `
      Aplicación web creada para la promoción y gestión de citas
      de la barbería The Good Barber.
    `,
    linkShare: 'https://thegoodbarber.es',
    linkDemo: 'https://thegoodbarber.es',
    image: project2,
  },
  {
    name: 'Piscinas Oceanus',
    description: `
      Aplicación web creada para la promoción y gestión de recursos
      empresariales de la empresa Piscinas Oceanus S.L.U.
    `,
    linkShare: 'https://www.piscinasoceanus.es/',
    linkDemo: 'https://www.piscinasoceanus.es/',
    image: project3,
  },
  {
    name: 'Trabajo Fin de Grado',
    description: `
      Proyecto de Fin de Grado para la Universidad de Cádiz.
      Dicho proyecto versa sobre la interconexión de un 
      Sistema clásico de Gestión con un Sistema de IoT integrado
      en la Cloud de Azure y en el ámbito de Smart Rural.
    `,
    linkShare: 'https://github.com/guilogar/tfg',
    linkDemo: 'https://frontend-tfg.azurewebsites.net/',
    image: project4,
  },
  {
    name: 'NextNotes',
    description: `
      Aplicación creada para una prueba de concepto. Se uso en el
      frontend Flutter y en el backend, Golang.
    `,
    linkShare: 'https://github.com/joaquinpco/NextNotes',
    linkDemo: 'https://github.com/joaquinpco/NextNotes',
    image: project5,
  },
  {
    name: 'Universidad',
    description: `
      En este repositorio, se encuentra todo lo desarrollado por mi persona
      durante mi paso por la universidad. Se puede encontrar diversidad
      de código, desde ensamblador hasta JavaScript y Python, pasando por 
      C, C++ y Java, entre otros...
    `,
    linkShare: 'https://github.com/guilogar/universidad',
    linkDemo: 'https://github.com/guilogar/universidad',
    image: project6,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justifyContent="center">
          {/* Projects */}
          {projects.map((project, i) => (
            <Grid item xs={12} sm={8} md={4} key={i}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button 
                    size="small" color="primary"
                    href={project.linkShare} target={'_blank'}>
                    Share
                  </Button>
                  <Button 
                    size="small" color="primary" 
                    href={project.linkDemo} target={'_blank'}>
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Portfolio;
