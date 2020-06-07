import React from "react";
import { Movie } from "../hooks/apiFetcher";

type CardProps = {
  movie: Movie;
};

export const Card = (props: CardProps) => {
  return (
    <div className="mv-card">
      <div className="mv-card-cover-box">
        <img className="mv-card-cover" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="Cover" />
      </div>

      <div className="mv-card-content">
        <div className="mv-card-title-box">
          <h3 className="mv-card-title">{props.movie.title}</h3>
        </div>

        <p className="mv-card-description">{props.movie.overview}</p>
      </div>
    </div>
  );
};
