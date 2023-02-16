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
  return (
    <header className={classes.root}>
        <img src={Logo} className="App-logo" alt="logo"/>
        <ul className={classes.listLinks}>
            <li><a>projets</a></li>
            <li><a>expériences</a></li>
            <li ><a>me contacter</a></li>
            
        </ul>
    </header>
  );
}

export default Header;
