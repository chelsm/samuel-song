import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Carousel from './components/carousel'


const useStyles = makeStyles({
  root: {
    background: 'var(--flash-orange)',
    height: '100vh',
    display: 'flex',
    gap: 70,
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10% 5%',
  },
  title: {
    color: 'var(--milk-color)',
    fontFamily: 'Chonburi',
    fontSize: 30
  },
  description: {
    color: 'var(--milk-color)',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
  }

})


function Projet() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        mes projets
      </Typography>
      <p className={classes.description}>
        Mes projets personnelles sont basés sur la réalisation de bijoux sur le logiciel Solidworks, ce qui me permet de mettre en valeurs mes compétence et ma créativités en tant que concepteur.
      </p>
      <Carousel />
    </div>
  );
}

export default Projet;
