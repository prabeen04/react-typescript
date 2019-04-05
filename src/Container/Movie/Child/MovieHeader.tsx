import * as React from 'react';

export default function MovieHeader() {
    return (
        <div className='movie-header'>
            <div className="filter-tags">
                <span className="tag">Top rated</span>
                <span className="tag">Most loved</span>
                <span className="tag">New arrival</span>
            </div>
        </div>
    )
}
