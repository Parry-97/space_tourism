import { DestinationType, fetchDestinationData } from "../utils";
import Destination from "./Destination";

export default async function Page() {
  const data = await fetchDestinationData();
  return (
    <div className="h-full justify-center pt-32 pb-16 flex flex-col bg-cover bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <Destination destinationData={data} />
    </div>
  );
}
