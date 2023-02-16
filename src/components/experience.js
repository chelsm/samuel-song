import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex',
        gap: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '7% 5%',
    },
    title: {
        color: 'var(--baby-blue)',
        fontFamily: 'Chonburi',
        fontSize: 27
    },
    jobContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridColumnGap: 62,
        gridRowGap: 34,

    },
    jobCard: {
        border: '3px solid #7AAFED',
        filter: 'drop-shadow(6px 4px 50px rgba(0, 0, 0, 0.25))',
        borderRadius: 16,
        padding: '23px 21px',
        display: 'flex',
        flexDirection: 'column',
        gap: 13,

    },
    name: {
        color: 'var(--flash-orange)',
        fontFamily: 'Chonburi',
        fontSize: 16
    },
    compagnyName: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: 'var(--baby-blue)'
    },
    ul: {
        margin: 0,
        padding: '0px 5%'
    },
    description: {
        fontFamily: 'Poppins-Regular',
        fontWeight: 400,
        fontSize: 14,
        color: 'var(--dark-gray)'
    }

})


function Exp() {
    const classes = useStyles()

    const jobs = [
        {
            jobLabel: "chef de projet d’innovation",
            compagny: 'Sitour',
            description: [
                'conception et e-conception de produit standard',
                'recherche et développement de nouveau produit standard'
            ]

        },
        {
            jobLabel: "dessinateur / projeteur industriel",
            compagny: 'Stilic Force',
            description: [
                'conception sur logiciel Solidworks',
                'mise en plan de pièces'
            ]
        },
        {
            jobLabel: "technicien maintenance de machine",
            compagny: 'EURO Pentel',
            description: [
                'maintenance de différentes machines',
                'etiquettage et emballage des produits'
            ]
        },
        {
            jobLabel: "agent d’accueil",
            compagny: 'Arena La Defense / La Seine Musicale',
            description: [
                'Accueil et orientation du client',
                'Contrôle des billets'
            ]
        }
    ]


    return (
        <div className={classes.root}>
            <Typography variant="h2" className={classes.title}>
                mes experiences professionnelles
            </Typography>
            <section className={classes.jobContainer}>
                {
                    jobs.map((job, jobIndex) => (
                        <article className={classes.jobCard}
                            style={{
                                border: jobIndex === 3 && '3px solid var(--flash-orange)'
                            }}
                        >
                            <Typography variant="h3" className={classes.name}>
                                {job.jobLabel}
                            </Typography>
                            <Typography variant="h3" className={classes.compagnyName}>
                                {job.compagny}
                            </Typography>
                            <ul className={classes.ul}>
                                {
                                    job.description.map(desc => (
                                        <li>
                                            <Typography variant="h3" className={classes.description}>
                                                {desc}
                                            </Typography>
                                        </li>
                                    ))
                                }
                            </ul>
                        </article>
                    ))
                }
            </section>
        </div>
    );
}

export default Exp;
