import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "theme.palette.background",
    padding: theme.spacing(1, 10, 5),
  },
 })
)
export default function HeroContent() {
  const classes = useStyles();
   return (
    <div className={classes.heroContent}>
      <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
        MyBOT List
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Una plataforma para el listado de Bots publicos de discord en español,
        puede usar nuestra lista para descubrir nuevos bots desarrollados por los miembros
        de la comunidad MyBOT Team.
      </Typography>
    </div>
   )
  
}
 