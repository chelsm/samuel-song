import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Deco from '../static/icon/deco.svg'
import { useForm, ValidationError } from '@formspree/react';



const useStyles = makeStyles({
    root: {
        position: 'relative',
        background: 'var(--dark-gray)',
        minHeight: '75vh',
        display: 'flex',
        gap: '20vh',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '7% 5%',
    },
    title: {
        color: 'var(--milk-color)',
        fontFamily: 'Chonburi',
        fontSize: 27
    },
    decoration: {
        transform: 'rotate(180deg)',
        position: 'absolute',
        left: 0,
        top: '-100px',
        height: 300,
    },
    caption: {
        textTransform: 'uppercase',
        fontFamily: 'Poppins-Bold',
        fontSize: 55,
        color: 'var(--milk-color)',
    },
    containerContact: {
        width: '100%',
        position: 'relative'
    },
    containerRed: {
        border: '7px solid  var(--flash-orange)',
        borderRadius: 342,
        width: '75%',
        margin: '0 auto',
        padding: '9%'
    },
    containerform: {
        borderRadius: 16,
        padding: '20px',
        background: 'var(--milk-color)',
        position: 'absolute',
        width: '50%',
        transform: 'translate(-50%,-50%)',
        left: '70%',
        top: '45%',
        display: 'flex',
        justifyContent: 'center',
    },
    myform: {
        width: '100%'
    },
    titleForm: {
        fontFamily: 'Futura LT Pro Bold',
        fontSize: 20,
    },

    inputFields: {
        '& input, & textarea': {
            margin: '10px 0',
            background: 'transparent',
            border: 'none',
            borderBottom: '2px solid var(--flash-orange)',
            padding: '10px',
            color: 'var(--flash-orange)',
            fontFamily: 'Poppins-Bold',
            fontWeight: 'bold ',
            width: '90%',
        },
        '& textarea': {
            maxHeight: '40vh',
            height: '40vh',
            color: 'var(--flash-orange)',

        }
    },
    btnSend: {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'var(--baby-blue)',
        cursor: 'pointer',
        fontSize: ' 1rem',
        textDecoration: 'none',
        textAlign: 'center',
        margin: '5px',
        fontFamily: 'Poppins-Bold',
        '&:hover': {
            color: '  #E16D5D',

        }
    },
    sendMsg: {
        fontFamily: 'Poppins-Bold',
        color: 'var(--flash-orange)',
        fontSize: ' 1rem',
    },
    '@media screen and (max-width: 700px)': {
        root:{
            gap: '10vh'
        },
        decoration: {
            height: 150,
        },
        title: {
            fontSize: 23
        },
        caption:{
            display: 'none'
        }, 
        containerform:{
            top: '50%',
            width: '90%',
            left: '50%',
        }, 
        containerRed:{
            height: 510
        }
    }


})

function Contact() {
    const classes = useStyles()

    const [state, handleSubmit] = useForm("xgebkwnq");
    if (state.succeeded) {
        return <p>Envoyé</p>;
    }

    return (
        <div className={classes.root} id="cont">
            <img src={Deco} alt='' className={classes.decoration} />
            <Typography variant="h2" className={classes.title}>
                me contacter
            </Typography>
            <div className={classes.containerContact}>
                <div className={classes.containerRed}>
                    <span className={classes.caption}>
                        get in <br />touch
                    </span>
                    <div className={classes.containerform}>
                        <form className={classes.myform} onSubmit={handleSubmit}>
                            <div className={classes.inputFields}>
                                <input id="email" type="email" name="email" placeholder="Email" required />
                            </div>
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />


                            <div className={classes.inputFields}>
                                <textarea placeholder="Message" id="message" name="message" required ></textarea>
                            </div>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button type="submit" className={classes.btnSend} disabled={state.submitting}>
                                envoyer
                            </button>
                            {
                                state.succeeded &&
                                (
                                    <Typography variant="h2" className={classes.sendMsg}>
                                        message envoyé
                                    </Typography>
                                )
                            }

                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Contact;
