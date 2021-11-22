import { useEffect, useState } from "react";
import Intro from "./Components/Intro";
import Main from "./Components/Main";
import Project from "./Components/Project";
import Record from "./Components/Record";
import Slider from "./Components/Slider";

function App() {
  const [slider, setSlider] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSlider(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      {slider ? (
        <Slider />
      ) : (
        <>
          <Main />
          <Intro />
          <Record />
          <Project />
        </>
      )}
    </div>
  );
}

export default App;
