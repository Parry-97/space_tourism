import Image from "next/image";
import homeBackground from "../../starter-code/assets/home/background-home-mobile.jpg";

export default function Home() {
  return (
    <div className="h-full bg-cover bg-[url('../../starter-code/assets/home/background-home-mobile.jpg')] md:bg-[url('../../starter-code/assets/home/background-home-tablet.jpg')] lg:bg-[url('../../starter-code/assets/home/background-home-desktop.jpg')]">
      <div className="h-full grid lg:grid-rows-1 max-w-7xl lg:grid-cols-2 justify-items-center items-center gap-8 grid-rows-2 justify-stretch grid-cols-1 text-white">
        <div className="mt-20 flex flex-col items-center gap-4">
          <h1 className="text-xl font-barlow_cond tracking-widest">
            SO YOU WANT TO TRAVEL TO
          </h1>
          <h2 className="md:text-[150px] md:leading-1 text-8xl leading-normal font-bellefair">
            SPACE
          </h2>
          <article className="font-barlow text-center lg:text-left max-w-md text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </article>
        </div>
        <div>
          <div className="rounded-full bg-white flex justify-center w-36 md:w-52 h-36 md:h-52">
            <button className="font-bellefair mx-auto text-black md:text-3xl text-xl">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
