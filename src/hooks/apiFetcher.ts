import { useEffect, useState, useReducer } from "react";

const BASE_API = "https://api.themoviedb.org/3";

const API_KEY = "8cfaa9c2cd892c338c650dbcf1149226";

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
  vote_average: number;
  overview: string;
  release_date: string;
};

export type ApiResults = {
  page: number;
  results: Movie[];
};

type State = {
  page: number;
};

export const useApiFetcher = (path: string): [Movie[], () => void] => {
  const [movies, setMovies] = useState([] as Movie[]);
  const [state, nextPage] = useReducer((state: State) => ({ page: state.page + 1 }), { page: 1 });

  useEffect(() => {
    fetch(`${BASE_API}${path}?api_key=${API_KEY}&page=${state.page}`)
      .then((res) => res.json())
      .then((nextMovies: ApiResults) => setMovies(movies.concat(nextMovies.results)));
  }, [state.page]);

  return [movies, nextPage];
};
