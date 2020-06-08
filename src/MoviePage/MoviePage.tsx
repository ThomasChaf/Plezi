import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useApiGet, Genre } from "../hooks/apiFetcher";
import { Loader } from "../common/Loader";
import "./page.scss";
import { Rating } from "../common/Rating/Rating";

type MoviePageParam = {
  id: string;
};

type MoviePageProps = RouteComponentProps<MoviePageParam>;

export const MoviePage = (props: MoviePageProps) => {
  const movie = useApiGet(`/movie/${props.match.params.id}`);

  return (
    <div className="container">
      {!movie && <Loader />}

      {movie && (
        <>
          <div className="row">
            <div className="col-md-4 overflow-hidden">
              <img className="mv-page-cover" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Cover" />
            </div>

            <div className="col-md-8">
              <h1 className="text-center">{movie.title}</h1>

              <h3 className="mv-page-tagline">{movie.tagline}</h3>

              <p className="mv-page-description">{movie.overview}</p>

              <div className="mv-page-label">Genres:</div>
              <div className="mv-page-info">{movie.genres.map((genre: Genre) => genre.name).join(", ")}</div>

              <div className="mv-page-label">Release date:</div>
              <div className="mv-page-info">{movie.release_date}</div>

              <div className="mv-page-label">Rating:</div>
              <Rating note={movie.vote_average} total={movie.vote_count} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
