import Link from "next/link";

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
        <Link href={"/destinations"}>
          <button className="box-content w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] bg-white rounded-full font-bellefair md:text-3xl text-xl text-black lg:hover:border-[80px] border-[rgba(0, 0, 0, 0.25)]  transition-all ease-in-out duration-300">
            EXPLORE
          </button>
        </Link>
      </div>
    </div>
  );
}
