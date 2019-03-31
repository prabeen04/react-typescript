import * as React from 'react';
import { Link } from "react-router-dom";
// import { ICardData } from "./LandingInterface";

export default function Card(props: any) {
    const { title, description, action } = props.card;
    return (
        <div className='feature-card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={action}>
                <button className="btn-danger btn text-btn">Explore &nbsp;<i className="fas fa-long-arrow-alt-right"></i></button>
            </Link>
        </div>
    )
}
