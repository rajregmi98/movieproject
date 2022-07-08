import { useState } from "react";
import MovieCard from "./MovieCard"; 
import Best from "./Best";

const movieData= [
    {
        Title: "Pirates of bay",
        Year: "2021",
        Plot: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    },
    {
        Title: "Thor: Ragnarok",
        Year: "2017",
        Plot: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
      },
      {
        Title: "The Avengers",
        Year: "2012",
        Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      },
];
export default function Home() {
    const [isFun, setIsFun] = useState(false);
    const [timespan,setTimespan] = useState("The Month");
  
    return (
      <div className="Home-Wrapper">
        <div> It is fun</div>
        <button onClick = {() => setTimespan("This is Movie")}>This Month</button>
        <button onClick = {() => setTimespan("This is Fun")}>This Year</button>
        <div>{timespan} is selected.</div>
        <h1>movies</h1>
        <h2>Everyone enjoy warching Movie</h2>
  
        <button onClick={() => setIsFun(!isFun)}>
          Make it {isFun ? "not fun" : "fun"}!
        </button>
  
        <div style={{ display: "flex" }}>
          <MovieCard
            title={movieData[0].Title}
            year={movieData[0].Year}
            plot={movieData[0].Plot}
            isFun={isFun}
          />
          <MovieCard
            title={movieData[1].Title}
            year={movieData[1].Year}
            plot={movieData[1].Plot}
            isFun={isFun}
          />
          <MovieCard
            title={movieData[2].Title}
            year={movieData[2].Year}
            plot={movieData[2].Plot}
            isFun={isFun}
          />

       <Best />

        </div>
        
      </div>
    );
  }

  