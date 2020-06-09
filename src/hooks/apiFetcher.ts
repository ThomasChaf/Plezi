import { useEffect, useState, useReducer } from "react";

const BASE_API = "https://api.themoviedb.org/3";

const API_KEY = "8cfaa9c2cd892c338c650dbcf1149226";

export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  title: string;
  tagline: string;
  vote_average: number;
  overview: string;
  release_date: string;
  genres: Genre[];
};

export type ApiGetResults = Movie;

export type ApiGetListResults = {
  page: number;
  results: Movie[];
};

type State = {
  page: number;
};

export const useApiGetList = (path: string): [Movie[], () => void] => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [state, nextPage] = useReducer((state: State) => ({ page: state.page + 1 }), { page: 1 });

  useEffect(() => {
    fetch(`${BASE_API}${path}?api_key=${API_KEY}&page=${state.page}`)
      .then((res) => res.json())
      .then((nextMovies: ApiGetListResults) => setMovies(movies.concat(nextMovies.results)));
  }, [state.page]); // eslint-disable-line

  return [movies, nextPage];
};

export const useApiQueryList = (path: string): [Movie[], (q: string) => void] => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (query === "") {
      setMovies([]);
      return;
    }

    fetch(`${BASE_API}${path}?api_key=${API_KEY}&query=${query}&include_adult={false}`)
      .then((res) => res.json())
      .then((nextMovies: ApiGetListResults) => setMovies(nextMovies.results));
  }, [query]); // eslint-disable-line

  return [movies, setQuery];
};

export const useApiGet = (path: string): null | Movie => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`${BASE_API}${path}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((nextMovie: ApiGetResults) => setMovie(nextMovie));
  }, [path]);

  return movie;
};
