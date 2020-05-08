import React from "react";
import "../styles/topRated.css";

const pic = "http://image.tmdb.org/t/p/w185";
const TopRated = (props) => {
  return (
    <div className="contenedor">
      {props.movies.map((movie) => (
        <div className="pelis" key={movie.id}>
          <h2>{movie.original_title}</h2>
          <img
            src={`${pic}${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
      ))}
    </div>
  );
};

export default TopRated;
