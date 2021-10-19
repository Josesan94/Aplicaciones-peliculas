
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import get from "../Utilities/httpClient";

import styles from "./MovieDetails.module.css";
import Spinner from "../components/Spinner";


function MovieDetails() {
    
    const { movieId} = useParams(); //el nombre del parametro sera el que nosotros le creamos en el Route de nuestra App.js
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null); // al cargar el componente y mostrar un null, me dara un error porque el dom querra mostrar algo que no existe, por eso colocamos un condicional if
    

    


    useEffect(() => {
        setIsLoading(true); // cuando comienza el useEffect la pelicula estara cargandose
        get("/movie/" + movieId).then(data =>{
            
            setMovie(data)
            setIsLoading(false); //cuando termina de cargarse el efecto, la pelicula ya estara cargada.
        })
    }, [movieId]); // en este caso, si este efecto depende de un valor o de un identificador que cambie en la ruta, entonces quiero que se vuelva a ejecutar el efecto

    if(isLoading) {
        return <Spinner />  //si la pelicula esta cargando(isLoading existe), mostrara un mensaje de que esta cargando
    }

    // if (!movie) {
    //     return null;
    // }

    const imgMovie = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
return (
    <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imgMovie} alt={movie.title} />
        <div className={`${styles.col} ${styles.MovieDetails}`} >
           <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
           <p>
               <strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")};
           </p>
           <p><strong>Description:</strong> {movie.overview}</p>
       
        </div>
        
    </div>
);


}

export default MovieDetails;