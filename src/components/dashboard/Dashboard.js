import React, {useEffect, useState} from 'react';
import '../../App.css';
import Recipe from '../../recipe';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { 
  Grid, 
  Button, 
  Card, 
  CardContent, 
  CardHeader, 
  Avatar, 
  Grow } from '@material-ui/core';
import {Search} from '@material-ui/icons';



const Dashboard = (props) => {




  const APP_ID = 'a99bd604'; 
  const APP_KEY = '801b3f6953e413a5d229de1043ba6dbd';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  
  

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data);
    }
    getRecipes();
  }, [query]);

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //   const data = await response.json();
  //   setRecipes(data.hits);
  // }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
 
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
        textAlign: "center",
      },
    },
  }));
  
  const classes = useStyles();
  
  const { auth, profile, projects } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 


  

  return (
    <div className="App">
      <Grid container 
        spacing={0} 
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '80vh' }}>
            <Grid item xs={10} sm={6} md={6} lg={4} xl={4} >
            <Grow in={true} timeout={1000}> 
                <Card>
                    <CardHeader 
                        title="Search For Ingredient"
                        avatar={
                            <Avatar>
                                <Search style={{fontSize:30}} />
                            </Avatar>
                        }
                    />
                    
                    <CardContent>
      <form onSubmit={getSearch} className={classes.root} noValidate autoComplete="off">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Enter an ingredient or a dish name" ></input>
        <Button 
                            fullWidth 
                            variant="contained"
                            type="submit" 
                            type="submit"
                            color="primary"
                            style={{marginTop:20}}>Search</Button>
      </form>
      </CardContent>
                </Card>
                    </Grow>
            </Grid>
        </Grid>
    )

   
      <div className="reciperesults">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        url={recipe.recipe.url}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}></Recipe>
        ))
      }
      </div>
    </div>

  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    //projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    //notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    //{ collection: 'projects', orderBy: ['createdAt', 'desc']},
   // { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)