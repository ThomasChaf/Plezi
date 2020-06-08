import React from "react";
import debounce from "lodash/debounce";
import { Link } from "react-router-dom";
import { useApiQueryList, Movie } from "../../hooks/apiFetcher";
import { Card } from "../../Home/Card";
import "./header.scss";

export const Header = () => {
  const [movies, search] = useApiQueryList("/search/movie");
  const handleSearch = debounce(search, 400);
  const close = () => search("");

  return (
    <>
      <nav className="mv-navbar">
        <Link to="/" className="mv-navbar-brand">
          Plezi
        </Link>

        <div className="navbar-search">
          <i className="material-icons md-24">search</i>

          <input
            className="navbar-search-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
          />

          {movies.length > 0 && (
            <i className="material-icons md-24 navbar-search-close" onClick={close}>
              close
            </i>
          )}
        </div>
      </nav>

      <div className={`navbar-results ${movies.length > 0 ? "expand" : ""}`}>
        <div className="row flex-grow-1">
          {movies.map((movie: Movie) => (
            <div className="col-md-2">
              <Card movie={movie} theme="light" />
            </div>
          ))}
        </div>
      </div>

      <div className="navbar-placeholder" />
    </>
  );
};
