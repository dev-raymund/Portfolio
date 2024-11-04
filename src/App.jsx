import Body from "./components/Body"
import Header from "./components/Header"

import ToggleDarkMode from "./components/ToggleDarkMode"

import Navigation from "./components/Navigation"

function App() {

  return (
    <>
      <div className="dark:bg-slate-700 transition duration-300 ease-in-out">

        <div className="fixed top-28 xl:top-5 right-5 z-10">
          <ToggleDarkMode />
        </div>

        <div className="block xl:hidden sticky top-0 bg-white shadow-md z-10">
          <div className="container px-10 mx-auto">
            <div className="flex pt-3 pb-3 items-center">
              <div className="w-1/2">
                <h2 className="font-sans text-sky-500 text-6xl font-bold">RH</h2>
              </div>
              <div className="w-1/2">
                <Navigation className="flex justify-end gap-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="container px-10 mx-auto">
          <div className="flex">

            <div className="hidden xl:block w-6/12 sticky top-0 pt-60 max-h-screen">
              <Header />
            </div>
            
            <div className="xl:w-6/12 pb-10">
              <Body />
            </div>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default App
