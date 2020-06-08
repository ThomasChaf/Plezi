import React from "react";
import { Card } from "./Card";
import { useApiGetList } from "../hooks/apiFetcher";
import { useInfiniteScroller } from "../hooks/infiniteScroller";
import { Loader } from "../common/Loader";
import "./home.scss";

export const Home = () => {
  const [movies, loadMore] = useApiGetList("/movie/popular");
  useInfiniteScroller(loadMore);

  return (
    <div className="container">
      <div className="row row-cols-4">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} withDescription />
        ))}
      </div>

      <Loader />
    </div>
  );
};
