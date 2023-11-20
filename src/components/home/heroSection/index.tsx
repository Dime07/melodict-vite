const HeroSection = () => {
  return (
    <section className="bg-dark-100">
      <div className=" max-w-[1440px] mx-auto px-20s">
        {/* left side */}
        <div>
          <div>
            <h1 className="text-[64px] text-white font-bold w-[540px] tracking-tight">
              Listen The Best Music Just on Your Held.
            </h1>
            <h3 className="mt-6 text-white/70 font-medium max-w-[484px] tracking-tight">
              Welcome to simplicity era. Enjoy your favourite song, album, and
              artist with our breakthrough only in one super app, one hand.{" "}
            </h3>
          </div>
          <div className="mt-16 flex gap-4">
            <button className="py-4 w-[180px] bg-primary-100 text-white rounded-[32px] font-bold hover:bg-primary-100/90 transition-all duration-500">
              Download now
            </button>
            <button className="py-4 w-[180px] bg-transparent border border-white text-white rounded-[32px] font-bold hover:bg-white hover:border-0 hover:text-dark-100 transition-all duration-500">
              Top 5 songs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
