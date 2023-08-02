export type DestinationOptions = "Moon" | "Mars" | "Europa" | "Titan";
export type DestinationType = {
  name: DestinationOptions;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export type CrewMemberType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

export type TechnologyType = {
  name: string;
  images: {
    landscape: string;
    portrait: string;
  };
  description: string;
};

export type TData = {
  destinations: DestinationType[];
  crew: CrewMemberType[];
  technology: TechnologyType[];
};

export async function fetchDestinationData(
  name: string
): Promise<DestinationType> {
  const response = await fetch(`${process.env.DB_HOST}/destinations`);
  const data: DestinationType[] = await response.json();
  return (
    data.find(
      (destination) => destination.name.toLowerCase() === name.toLowerCase()
    ) ?? data[0]
  );
}

export async function fetchTechnologyData(
  index: number
): Promise<TechnologyType> {
  const response = await fetch(`${process.env.DB_HOST}/technology`);
  const data: TechnologyType[] = await response.json();
  return data[index] ?? data[0];
}

export async function fetchCrewData(index: number): Promise<CrewMemberType> {
  const response = await fetch(`${process.env.DB_HOST}/crew`);
  const data: CrewMemberType[] = await response.json();
  return data[index] ?? data[0];
}
