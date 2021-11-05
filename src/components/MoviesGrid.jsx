import { useEffect, useState } from 'react';
import {useQuery} from '../hooks/useQuery';
import get from '../Utilities/httpClient';
import InfiniteScroll from 'react-infinite-scroll-component';

import MovieCard from './MovieCard';
//import movies from './movies.json';
import styles from './MoviesGrid.module.css';
import Spinner from './Spinner';






function MoviesGrid({ search }) { //prop search
    //PRIMERA MANERA
    const [movies, setMovies] = useState([]); 
    // con movies traemos las movies que añadimos, y con setMovies traemos la funcion para poder cambiar el estado de las movies que se agreguen. Siempre debemos usar la funcion (en este caso setMovies) para modificar el estado

    const [loading, setLoading] = useState(true);
    //*SEGUNDA MANERA*
    // const moviesState = useState([]) 
 
    // const [movies, setMovies] = moviesState; 
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    
    

    
     

    useEffect(() =>{ //LOS EFFECTS SE EJECUTAN UNA VEZ QUE EL COMPONENTE ESTE CARGADO EN EL DOM
        setLoading(true);
        const searchURL = search 
        ? "/search/movie?query=" + search + "&page=" + page //operador ternario
        : "/discover/movie?page=" + page;
        get(searchURL).then((data) => { //convierto mi resultado a json para que js lo lea
            setMovies((prevMovies)=> prevMovies.concat(data.results)); // con esto logro que las peliculas se carguen a  medida que bajo la pagina, y no que se reemplacen en la pagina principal (1)
            setHasMore(data.page < data.total_pages)
            setLoading(false);

        }); 
        
    }, [search, page]); // si colocamos un array vacio, le estamos diciendo que el efecto solo se ejecute una sola vez cuando se cargue el componente, y no se vuelva a ejecutar de nuevo. Si colocamos un componente, le decimos que la pagina se ejecute cada vez que se ese componente es llamado

    

    

    return (
        <InfiniteScroll
        dataLength={movies.length}
        hasMore = {hasMore}
        next = {() => setPage((prevPage) => prevPage+1)} 
        // {/* Para actualizar el estado a partir de un estado anterior, utilizamos una funcion. En este caso, lo que haremos con setPage sera colocar una funcion interna para que automaticamente se pase de pagina al llegar al final del scroll */}
        loader ={<Spinner/>} //
        >
        <ul className ={styles.moviesGrid}>
            {movies.map( (movie) => (
             <MovieCard key ={movie.id} movie = {movie} /> //es muy importante el us de la key en react. permite identificar siempre al componente, por lo que no habrá que crearlo de vuelta y reordenandolo en la posicion del array que se le asigne
                    
            ))}
         </ul>
         </InfiniteScroll>
    )

}

export default MoviesGrid;