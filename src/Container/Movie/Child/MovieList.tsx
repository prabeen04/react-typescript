import * as React from 'react'
import { IMovie } from "../MovieInterface";

interface IMovieListProps {
    movies: IMovie[];
}
export default function MovieList(props: IMovieListProps): JSX.Element {
    const { movies } = props;
    return (
        <>
            {
                movies.map((movie: IMovie) => {
                    return (<>
                        <p>{movie.original_title}</p>
                        {/* <img src={`${IMG_URL}${movie.poster_path}`} alt="" /> */}
                    </>)
                })
            }
        </>
    )
}
