import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Recipe(props) {
  const {title,calories,image, ingredients, url} = props  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Card>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {title[0]}
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title={title}
                            subheader= ""
                        />
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            The amount of Calories: {calories}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        <a href={url} className="recipe__url" target="_blank" rel="noopener noreferrer"><Button size="small" variant="outlined">INGREDIENT</Button></a>
                        </CardActions>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    <br />
    </div>
  );
}
export default Recipe











// const Recipe = ({title,calories,image, ingredients, url}) => {
//     return(
//         <div className={style.recipe}>
//             <a href={url} className="recipe__url" target="_blank" rel="noopener noreferrer"><h1>{title}</h1></a>
//             <small><strong>Calorie count:</strong> {calories.toFixed(2)}</small>
//             <img src={image} alt="" className="recipe__image"/>
//         </div>
//     )
// }

// export default Recipe