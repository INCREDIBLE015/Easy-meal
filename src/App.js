import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { createMuiTheme, ThemeProvider, Paper } from '@material-ui/core';
import Snackbar from "./Snackbar";



function App(){
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode(!darkMode)
  }

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  })
    return (
      <ThemeProvider theme={theme}>
        <Paper>
          <BrowserRouter>
            <div className="App" >
              <Snackbar />
              <Navbar theme={darkMode} handleChange={handleChange}/>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
              </Switch>
            </div>
          </BrowserRouter>
        </Paper>
      </ThemeProvider>
    );
}

export default App;