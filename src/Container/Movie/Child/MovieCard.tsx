import * as React from 'react'
import { IMovie } from "../MovieInterface";
const IMG_URL = 'http://image.tmdb.org/t/p/w185/'

interface IMovieCardProps {
    movie: IMovie
}
export default function MovieCard({ movie }: { movie: IMovie }): JSX.Element {
    return (
        <div className='movie-card' data-test='MovieCard'>
            <p>{movie.title}</p>
            <div className='flex-container'>
                <img className='movie-poster' src={`${IMG_URL}${movie.poster_path}`} alt="" />
            </div>
            <div className="movie-stats">
                <div className="stats-column">
                    <i className="fas fa-calendar-day"></i>
                    <span>{movie.release_date}</span>
                </div>
                <div className="stats-column">
                    <i className="fas fa-heartbeat"></i>
                    <span>{movie.vote_count}</span>
                </div>
                <div className="stats-column">
                    <i className="fas fa-star"></i>
                    <span>{movie.vote_average}</span>
                </div>
            </div>

        </div>
    )
}
