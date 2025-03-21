const Hero = () => {
  return (
    <section id="hero" className="pt-20">
      <div className="container px-3 md:px-10 mx-auto">
        <div className="flex justify-center">
          <div className="w-1/2">
            <h3 className="font-sans text-slate-900 text-xl font-semibold mb-3">
              Hi!
            </h3>

            <h1 className="font-sans text-slate-900 text-5xl xl:text-6xl font-semibold">
              I'm <span className="text-amber-500">Raymund Hermoso</span>
            </h1>

            <h2 className="font-sans font-semibold text-slate-900 text-3xl xl:text-4xl mt-3 mb-10">
              Web Developer Based in Philippines.
            </h2>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
