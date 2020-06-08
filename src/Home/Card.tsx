import React from "react";
import { Movie } from "../hooks/apiFetcher";
import { Link } from "react-router-dom";

type CardProps = {
  movie: Movie;
  theme?: string;
  withDescription?: boolean;
};

const Card = (props: CardProps) => {
  return (
    <div className={`mv-card ${props.theme}`}>
      <div className="mv-card-cover-box">
        <img className="mv-card-cover" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="Cover" />
      </div>

      <div className="mv-card-content">
        <Link to={`/movie/${props.movie.id}`} className="mv-card-title-box">
          <h3 className="mv-card-title">{props.movie.title}</h3>
        </Link>

        {props.withDescription && <p className="mv-card-description">{props.movie.overview}</p>}
      </div>
    </div>
  );
};
Card.defaultProps = {
  theme: "basic"
};

export { Card };
