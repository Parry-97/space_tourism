export default function Home() {
  return (
    <div className="h-full bg-cover bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <div className="h-full grid lg:grid-flow-col justify-items-center items-center gap-8 grid-flow-row text-white">
        <div>
          <h1 className="md:text-xl text-center lg:text-2xl lg:text-left font-barlow_cond tracking-widest">
            SO YOU WANT TO TRAVEL TO
          </h1>
          <h2 className="md:text-[150px] md:leading-1 text-center text-8xl leading-normal font-bellefair">
            SPACE
          </h2>
          <article className="font-barlow text-center lg:text-left max-w-md text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </article>
        </div>
        <div className="rounded-full bg-white flex justify-center w-36 md:w-52 md:h-52 lg:w-[274px] h-36 lg:h-[274px]">
          <button className="font-bellefair mx-auto text-black md:text-3xl text-xl">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}
