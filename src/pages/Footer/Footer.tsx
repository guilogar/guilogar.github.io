import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Linkedin from '@material-ui/icons/LinkedIn';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  const [linkedin, setLinkedin] = useState<string>(
    'https://www.linkedin.com/in/guillermo-l%C3%B3pez-garc%C3%ADa-ba45b2123/'
  );

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction 
        icon={<Linkedin />} className={classes.root}
        href={linkedin} target={'_blank'}
      />
    </BottomNavigation>
  );
};
export default Footer;
