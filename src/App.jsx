import { lazy, Suspense } from "react";

const CastSpotlight = lazy(() => import("./components/CastSpotlight"));
const Countdown = lazy(() => import("./components/Countdown"));
const FilmSynopsis = lazy(() => import("./components/FilmSynopsis"));
const SuperMan = lazy(() => import("./components/SuperMan"));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <SuperMan />
        <FilmSynopsis />
        <CastSpotlight />
        <Countdown />
      </Suspense>
    </main>
  );
}

export default App;
