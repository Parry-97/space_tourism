export default async function Page(props: { children: React.ReactNode }) {
  return (
    <div className="h-full mix-blend-screen bg-opacity-25 pt-32 pb-16 md:pb-0 flex justify-center xl:justify-end flex-col bg-cover bg-[url('/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
      <div className="text-white relative xl:top-8 text-xl lg:text-3xl tracking-widest md:pl-10 lg:pl-24 md:self-start flex gap-8 justify-center">
        <p className="font-bold font-barlow_cond opacity-25">02</p>{" "}
        <p className="font-barlow_cond">MEET YOUR CREW</p>
      </div>
      {props.children}
    </div>
  );
}
