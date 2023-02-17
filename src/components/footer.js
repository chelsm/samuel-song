import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'



const useStyles = makeStyles({
    root: {
        position: 'relative',
        background: 'var(--milk-color)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    copyright:{
        color: 'var(--flash-orange)',
        fontFamily: 'Poppins-Medium',
        fontSize: 12, 
        textAlign: 'center'
    }   

})

function Contact() {
    const classes = useStyles()

    return (
        <footer className={classes.root}>
            <Typography variant="h5" className={classes.copyright}>
                Copyright © 2023 Samuel Song | Tous droits réservés 
            </Typography>

        </footer>
    );
}

export default Contact;
