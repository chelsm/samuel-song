import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography , Button} from '@material-ui/core'
import Carousel from 'react-elastic-carousel';
import Flower1 from '../../../static/images/jowelery/flower_1.svg'
import Flower2 from '../../../static/images/jowelery/flower_2.svg'
import Flower3 from '../../../static/images/jowelery/flower_3.svg'
import Pearl1 from '../../../static/images/jowelery/pearl_1.svg'
import Pearl2 from '../../../static/images/jowelery/pearl_2.svg'
import Pearl3 from '../../../static/images/jowelery/pearl_3.svg'
import Twist1 from '../../../static/images/jowelery/twist_1.svg'
import Twist2 from '../../../static/images/jowelery/twist_2.svg'
import Twist3 from '../../../static/images/jowelery/twist_3.svg'
import PdfFlower from '../../../static/documents/plan_bague_fleur.pdf'
import PdfPearl from '../../../static/documents/plan_boucle_perle.pdf'
import PdfTwist from '../../../static/documents/plan_boucle_torsade.pdf'


const useStyles = makeStyles({
    root: {
        height: '400px',
        width: '105%',
        '& .rec.rec-arrow': {
            display: 'none'
        },
       '& .rec-dot': {
            backgroundColor:'var(--milk-color)',
            boxShadow: '0 0 1px 3px var(--milk-color)',
            height: 7,
            width: 7,
        },
        '& .rec-dot:active': {
            backgroundColor:'var(--baby-blue)',
            boxShadow: '0 0 1px 3px var(--baby-blue)',
            height: 7,
            width: 7,
        },
        '& .rec-dot_ctive': {
            backgroundColor:'var(--baby-blue)',
            boxShadow: '0 0 1px 3px var(--baby-blue)',
            height: 10,
            width: 10,
        },
        '& .rec-dot:hover': {
            boxShadow: '0 0 1px 3px var(--baby-blue)',
        }
    },
    card: {
        padding: '55px 50px',
        backgroundColor: 'var(--milk-color)',
        height: 'auto',
        width: '100%',
        margin: '0px 20px',
        color: 'blue',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    label: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: 'var(--dark-gray)',
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    img: {
        height: 350,
        maxWidth: 200,
    },
    btnSeePlan:{
        padding: '8px 25px',
        width: 'fit-content',
        background: '#7AAFED', 
        color: 'var(--dark-gray)',
        textTransform: 'none',
  fontFamily: 'Poppins-Bold',
    },
    containerBtn:{
        display: 'flex',
        justifyContent: 'flex-end',
    }
})


function Projet() {
    const classes = useStyles()

    const items = [
        {
            label: "La boucle d'oreille torsadée en or ",
            img1: Twist1,
            img2: Twist2,
            img3: Twist3, 
            url: PdfTwist
        },
        {
            label: "La boucle d'oreille à double perles",
            img1: Pearl1,
            img2: Pearl2,
            img3: Pearl3,
            url: PdfPearl

        },
        {
            label: "La bague à fleurs",
            img1: Flower1,
            img2: Flower2,
            img3: Flower3,
            url: PdfFlower

        }
    ]

    return (
        <section className={classes.root}>
            <Carousel>
                {items.map((item, index) => (
                    <article key={index} className={classes.card}>
                        <Typography variant="caption" className={classes.label}>
                            {item.label}
                        </Typography>
                        <div className={classes.imgContainer}>
                            <img src={item.img1} alt="img" className={classes.img} />
                            <img src={item.img2} alt="img" className={classes.img} />
                            <img src={item.img3} alt="img" className={classes.img} />
                        </div>

                        <div className={classes.containerBtn}>
                        <Button className={classes.btnSeePlan} href={item.url} target="_blank">
                            voir le plan
                        </Button>
                        </div>
                        
                    </article>
                ))}
            </Carousel>
        </section >
    );
}

export default Projet;
