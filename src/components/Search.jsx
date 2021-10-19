
import styles from './Search.module.css';
import {BsSearch} from 'react-icons/bs';
import {useEffect, useState} from "react";
import { useHistory } from 'react-router';
import {useQuery} from "../hooks/useQuery";


export function Search() {
    const query = useQuery();
    const search = query.get("search");
    const [searchText, setSearchText] = useState("");
    const history = useHistory(); //este hook me da un objeto history que me va a permitir cambiar el historial de navegacion de la ruta,permitiendo añadir un nuevo elemento a la ruta y moverse hacia nuevo elemento.

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
      e.preventDefault(); //prevenimos que el formulario le haga peticiones al servidor y refresque la pagina
      history.push("/?search=" + searchText) // redireccionamos a esta ruta


    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}> {/* al colocar el boton dentro formulario, tanto como le haga click o toque enter, como es de tipo submit, procedera a realizar la accion, por lo que hay que manejar la accion del boton DENTRO DEL FORMULARIO(ON SUBMIT)*/}
            <div className={styles.searchBox}>
                <input 
                className={styles.searchInput} 
                type="text" 
                value={searchText} 
                onChange={(e)=> setSearchText(e.target.value)} /> 
                {/* con value le pasamos el valor que va a tener el input, y con onChange le especificamos como va a cambiar ese valor */}
                <button className={styles.searchButton} type ="submit"> 
                <BsSearch size={20} />
                </button>
            </div>
        </form>
    )
}
