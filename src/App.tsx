import { useState } from "react"
import { type LottieComponentProps } from "lottie-react"

import Grid from "./components/grid"
import Header from "./components/header"
import Hero from "./components/hero"
import Intro from "./components/intro"
import Me from "./components/me"
import Divider from "./components/divider"

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  const handleLoadingComplete: LottieComponentProps["onComplete"] = () => {
    setFadingOut(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 500);
  };

  return (
    <>
      {showIntro ? <Intro onComplete={handleLoadingComplete} fadingOut={fadingOut} /> : (
        <main className='container'>
          <Header />
          <Hero />
          <Grid />
          <Divider />
          <Me />
        </main>
      )}
    </>
  )
}

export default App
