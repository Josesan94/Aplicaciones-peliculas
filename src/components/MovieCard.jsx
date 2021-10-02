import { Link }from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({movie}) {
    console.log(styles); // styles son objectos con nombre y valor

    const ImageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    /*de este tendremos clases unicas para nuestros componentes*/ 
    return <li className ={styles.movieCard}> 
        
        <Link to ={"/movies/" + movie.id}>
        <img 
        width={230} 
        height={345} 
        className= {styles.movieImage} 
        src = {ImageUrl} 
        alt ={movie.title}/> 

        <div>{movie.title}</div>
        </Link>
        </li> //siempre colocar keys en elementos de listado

}

export default MovieCard;

