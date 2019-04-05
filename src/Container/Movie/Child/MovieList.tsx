import * as React from 'react';
import { useSpring, useSprings, animated } from "react-spring";
import { IMovie } from "../MovieInterface";
import MovieCard from './MovieCard';

interface IMovieListProps {
    movies: IMovie[];
    searchText: string;
}
export default function MovieList(props: IMovieListProps): JSX.Element {
    const { movies, searchText } = props;
    const styles = useSpring({ 
        opacity: 1,
        transform: 'translate3d(200px,800px,0) ', 
        from: { 
            opacity: 0,
            transform: 'translate3d(0,0,0) '
        },
         delay: 500
         })
    return (
        <animated.div style={styles}>
            <div className='movie-list' data-test='MovieList'>
                {movies
                    .filter((movie: IMovie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
                    .map((movie: IMovie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </animated.div>
    )
}
