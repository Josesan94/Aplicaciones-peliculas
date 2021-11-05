import MoviesGrid from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useQuery } from "../hooks/useQuery";

function LandingPage() {
    const query = useQuery();//esta funcion extraida del react router dom nos permite parsear una location y convierte en claves todas las palabras para que despues podamos usarla en diferentes tareas que necesitemos hacer
    const search = query.get("search");// copiamos el query y search desde el componente hijo ( moviesgrid) para que cuando introduzcamos un nuevo estado, el componente se resetee y cargue con los nuevos datos. Se lo hace tambien colocandole una key al componente moviesGrid
    return (
        <div>
            <Search/>
            <MoviesGrid key={search} search={search}/>
        </div>
    )
}

export default LandingPage;