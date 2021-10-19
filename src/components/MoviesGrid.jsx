import { useEffect, useState } from 'react';
import {useQuery} from '../hooks/useQuery';
import get from '../Utilities/httpClient';


import MovieCard from './MovieCard';
//import movies from './movies.json';
import styles from './MoviesGrid.module.css';
import Spinner from './Spinner';






function MoviesGrid() {
    //PRIMERA MANERA*
    const [movies, setMovies] = useState([]); // con movies traemos las movies que añadimos, y con setMovies traemos la funcion para poder cambiar el estado de las movies que se agreguen. Siempre debemos usar la funcion (en este caso setMovies) para modificar el estado

    const [loading, setLoading] = useState(true);
    //*SEGUNDA MANERA*
    // const moviesState = useState([]) 
 
    // const [movies, setMovies] = moviesState; 

    const query = useQuery();//esta funcion extraida del react router dom nos permite parsear una location y convierte en claves todas las palabras para que despues podamos usarla en diferentes tareas que necesitemos hacer
    const search = query.get("search");
    console.log(search);

    
     

    useEffect(() =>{ //LOS EFFECTS SE EJECUTAN UNA VEZ QUE EL COMPONENTE ESTE CARGADO EN EL DOM
        setLoading(true);
        const searchURL = search 
        ? "/search/movie?query=" + search //operador ternario
        : "/discover/movie";
        get(searchURL).then((data) => { //convierto mi resultado a json para que js lo lea
            setMovies(data.results);
            setLoading(false);

        }); 
        
    }, [search]); // si colocamos un array vacio, le estamos diciendo que el efecto solo se ejecute una sola vez cuando se cargue el componente, y no se vuelva a ejecutar de nuevo

    if(loading) {
        return <Spinner/> ;

    }

    

    return (
        <ul className ={styles.moviesGrid}>
            {movies.map( (movie) => (
             <MovieCard key ={movie.id} movie = {movie} />
                    
            ))}
         </ul>
    )

}

export default MoviesGrid;