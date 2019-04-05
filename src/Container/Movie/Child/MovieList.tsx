import * as React from 'react'
import { IMovie } from "../MovieInterface";
import MovieCard from './MovieCard';

interface IMovieListProps {
    movies: IMovie[];
    searchText: string;
}
export default function MovieList(props: IMovieListProps): JSX.Element {
    const { movies, searchText } = props;
    return (
        <div className='movie-list' data-test='MovieList'>
            {movies
                .filter((movie: IMovie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
                .map((movie: IMovie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}
