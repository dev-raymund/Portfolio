import Body from "./components/Body"
import Header from "./components/Header"

import ToggleDarkMode from "./components/ToggleDarkMode"

function App() {

  return (
    <>
      <div className="dark:bg-slate-700 transition duration-300 ease-in-out">
        <div className="fixed top-5 right-5">
          <ToggleDarkMode />
        </div>
        <div className="container px-10 mx-auto">
          <div className="flex">
            <Header />
            <Body />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
