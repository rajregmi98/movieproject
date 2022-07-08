import { useState } from "react";
export default function MovieCard(props) {
    return (
      <div className={props.isFun ? "FunMovieCard" : "MovieCard"}>
        <div className="MovieCard-Title">{props.title}</div>
        <div className="MovieCard-Year">{props.year}</div>
        <div className="MovieCard-Plot">{props.plot}</div>
      </div>
    );
}