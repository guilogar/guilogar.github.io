import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

interface CurriculumItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  items?: Array<string>;
};

const curriculum: Array<CurriculumItem> = [
  {
    year: '2017',
    title: 'Web Design and Hybrid App',
    subtitle: 'Slice Rota',
    description: `
      Creación de software multiplataforma para aplicaciones móviles 
      (Android e iOS) y tablets con Ionic enlazado dinámicamente con 
      un servidor con capacidad de ejecución concurrente escrito en 
      PHP con el framework Phalcon. Gestión y creación de base de datos 
      en PostgreSQL relacional y en MongoDB NoSQL. Todo esto se ha 
      realizado virtualizando los sistemas mediante la nube Heroku.
    `,
  },
  {
    year: '2018',
    title: 'Testing',
    subtitle: 'Opinno',
    description: `
      Prácticas de Universidad en empresa de innovación, como 
      desarrollador de software y testing & QA.
      Funciones específicas:
    `,
    items: [
      `
        Testing de software automático, mediante el uso de Spectron y Mocha.
      `,
      `
        Por otra parte, también, estuve desarrollando con la tecnología NodeJS en backend.
      `,
    ],
  },
  {
    year: '2019',
    title: 'Development',
    subtitle: 'Opinno',
    description: `
      Contrato en empresa de innovación, como desarrollador backend.
      Funciones específicas:
    `,
    items: [
      `
        Desarrollo con la tecnología NodeJS en backend, con expressJS 
        y Loopback V3 para generación dinámica de endpoints para las 
        distintas entidades y relaciones entre sí.
      `,
      `
        Desarrollo con la tecnología Java Spring Boot en backend, 
        con Hibernate para acceder a la base de datos.
      `,
      `
        Pruebas unitarias con Mocha y de end to end, con Appium y JUnit.
      `,
    ],
  },
  {
    year: '2021',
    title: 'Development',
    subtitle: 'BBVA Next Technologies',
    description: `
      Contrato en empresa de innovación en el sector bancario, como desarrollador full stack.
    `,
  },
];

const Resume = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          {
            curriculum.map((item, index) => {
              return (
                <>
                  <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                  >
                    {item.year}
                  </Typography>
                  <Box component="div" className={classes.timeLineItem}>
                    <Typography
                      variant="h5"
                      align="center"
                      className={classes.subHeading}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                      {item.subtitle}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      className={classes.subtitle1}
                    >
                      {item.description}
                      <ul>
                        {
                          item.items !== undefined
                          &&
                          item.items?.length > 0
                          &&
                          item.items.map((itemDesc, index) => {
                            return (
                              <li>
                                {itemDesc}
                              </li>
                            )
                          })
                        }
                      </ul>
                    </Typography>
                  </Box>
                </>
              );
            })
          }
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Resume;
