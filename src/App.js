import React from 'react'
import Header from './components/header'
import Projet from './components/project'
import Experience from './components/experience'
import Footer from './components/footer'
import Contact from './components/contact'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Deco from './static/icon/deco.svg'

const useStyles = makeStyles({
  root: {
    height: '100%',
    background: 'var(--milk-color)'
  },
  presentationView: {
    height: '120vh'
  },
  homeView: {
    height: '100vh'
  },
  presentationContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  nameContainer: {
    position: 'relative',
  },
  name: {
    fontFamily: 'Chonburi',
    fontWeight: 400,
    fontSize: '10em',
    cursor: 'default',
  },
  dot: {
    color: 'var(--flash-orange)',
  },
  job: {
    color: 'var(--baby-blue)',
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
    position: 'absolute',
    left: '80%',
    width: '100%',
    bottom: '-55px'
  },
  presentation: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'var(--dark-gray)',
    width: '80%',
    display: 'block',
    textAlign: 'center',
    margin: ' 0 auto'
  },
  decoration: {
    position: 'absolute', 
    right:0,
    height: 280,
  }, 
})


function App() {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.presentationView}>
        <div className={classes.homeView}>
          <Header />
          <div className={classes.presentationContainer}>
            <div className={classes.nameContainer}>
              <Typography variant="h1" className={classes.name}>
                sam
                <span className={classes.dot}>
                  .
                </span>
              </Typography>
              <span className={classes.job}>
                concepteur <br />joaillier cao
              </span>
            </div>
          </div>
        </div>
        <p className={classes.presentation}>
          Titulaire d'une Licence Professionnelle en Innovation et Développement Industriel CAO, je suis à la recheche d’un poste qui pourrait atteindre mes objectifs dans le monde de la joaillerie.
        </p>
        <img src={Deco} alt='' className={classes.decoration} />
      </div>
      <Projet />
      <Experience />
      <Contact/>
      <Footer/>

    </div>

  );
}

export default App;
