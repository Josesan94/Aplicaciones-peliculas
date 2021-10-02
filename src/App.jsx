import MoviesGrid from "./components/MoviesGrid";
import styles from './App.module.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

 function App() {
    return (
    <Router>
        <header>
            <Link to="/">
            <h1 className ={styles.title}>Movies</h1>
            </Link>
        </header>
        <main>
            {/* Switch Lleva a la ruta correcta */}
        <Switch> 
          <Route exact path="/movies/:movieId"><MovieDetails /></Route>
          <Route  path="/"><LandingPage /></Route>  
        </Switch>
        </main>
    </Router>
    )};


export default App;