import * as React from 'react'
import { IMovie } from "../MovieInterface";
import MovieCard from './MovieCard';

interface IMovieListProps {
    movies: IMovie[];
}
export default function MovieList(props: IMovieListProps): JSX.Element {
    const { movies } = props;
    return (
        <div className='movie-list' data-test='MovieList'>
            {movies.map((movie: IMovie) => <MovieCard movie={movie} />)}
        </div>
    )
}
