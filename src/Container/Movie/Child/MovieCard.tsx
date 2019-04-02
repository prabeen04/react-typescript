import * as React from 'react'
import { IMovie } from "../MovieInterface";
const IMG_URL = 'http://image.tmdb.org/t/p/w185/'

interface IMovieCardProps {
    movie: IMovie
}
export default function MovieCard({ movie }: { movie: IMovie }): JSX.Element {
    return (
        <div className='movie-card'>
            <p>{movie.title}</p>
            <img src={`${IMG_URL}${movie.poster_path}`} alt="" />
        </div>
    )
}
