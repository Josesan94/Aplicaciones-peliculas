


const API = "https://api.themoviedb.org/3";

function get(path) {
    return fetch(API +path,{ //path sera la ruta que me envien como parametro
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjcwZDg0ZmUxNDZmN2UzODVlYjdiMWNiZDkwMGNhMCIsInN1YiI6IjYxNjgzYjczNWNlYTE4MDA0MjQ5ZGE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KUvUbk6pK77Z0qdfa2gRUIggdUBza8AUJduN66oMLUc",
            "Content-Type": "application/json;charset=utf-8"  ,  
        },
    }).then(result => result.json());
}


export default get;