import React from 'react'
import Logo from '../static/icon/logo.svg'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root:{
        padding: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listLinks: {
        display: 'flex',
        listStyle:'none',
        gap: '5em',
        '& a': {
            textDecoration:'none',
            fontFamily: 'Chonburi',
            color: 'var(--dark-gray)',
            fontWeight:'bold',
            '&:hover': {
            cursor:'pointer',
            color: 'var(--flash-orange)',

            }
        }
    },
})


function Header() {
    const classes = useStyles()

    const scrollToProjet = () => {
        const comp = document.getElementById("projet");
        comp.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
      }
      const scrollToExp = () => {
        const exp = document.getElementById("exp");
        exp.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
      }
      const scrollToCont = () => {
        const cont = document.getElementById("cont");
        cont.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
      }
  return (
    <header className={classes.root}>
        <img src={Logo} className="App-logo" alt="logo"/>
        <ul className={classes.listLinks}>
            <li onClick={()=>scrollToProjet()}><a>projets</a></li>
            <li onClick={()=>scrollToExp()}><a>expériences</a></li>
            <li onClick={()=>scrollToCont()}><a>me contacter</a></li>
            
        </ul>
    </header>
  );
}

export default Header;
