import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="pt-7 pb-7">
      <div className="container px-3 md:px-10 mx-auto">
        <div className="bg-green-900 p-3 rounded-full flex">
          <div className="w-1/4 flex items-center">
            <h1 className="text-white font-extrabold bg-white px-6 py-3 rounded-full text-black">
              LOGO
            </h1>
          </div>
          <div className="w-1/2 flex items-center">
            <Navigation />
          </div>
          <div className="w-1/4 flex justify-end">
            <a
              href="#"
              className="bg-white px-6 py-3 rounded-full hover:bg-amber-500 hover:text-white ase-in-out duration-300 font-medium text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
