export default async function Page(props: { children: React.ReactNode }) {
  return (
    <div className="h-full justify-center gap-10 lg:gap-40 pt-32 pb-16 flex flex-col bg-cover bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <div className="text-white text-xl lg:text-3xl tracking-widest md:pl-24 md:self-start flex gap-8 justify-center">
        <p className="font-bold font-barlow_cond opacity-25">01</p>{" "}
        <p className="font-barlow_cond">PICK YOUR DESTINATION</p>
      </div>
      {props.children}
    </div>
  );
}
