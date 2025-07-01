import { useState } from "react";
import SuperMan from "./components/SuperMan";
import FilmSynopsis from "./components/FilmSynopsis";
import CastSpotlight from "./components/CastSpotlight";
import Countdown from "./components/Countdown";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  //
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && (
        <LoadingSpinner onLoadingComplete={handleLoadingComplete} />
      )}
      <main
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <SuperMan />
        <FilmSynopsis />
        <CastSpotlight />
        <Countdown />
      </main>
    </>
  );
}

export default App;
