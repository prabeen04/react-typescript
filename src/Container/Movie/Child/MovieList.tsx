import * as React from 'react';
import { useSpring, useSprings, useTransition, animated } from "react-spring";
import { IMovie } from "../MovieInterface";
import MovieCard from './MovieCard';

interface IMovieListProps {
    movies: IMovie[];
    searchText: string;
}
export default function MovieList(props: IMovieListProps): JSX.Element {
    const { movies, searchText } = props;
    // const transitions = useTransition(movies, (item: any) => item.id, {
    //     from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    //     enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    //     update: ({ xy, width, height }) => ({ xy, width, height }),
    //     leave: { height: 0, opacity: 0 },
    //     config: { mass: 5, tension: 500, friction: 100 },
    //     trail: 25
    //   })
    return (
        <animated.div>
            <div className='movie-list' data-test='MovieList'>
                {movies && movies
                    .filter((movie: IMovie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
                    .map((movie: IMovie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </animated.div>
    )
}
