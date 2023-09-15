import { readFile } from "fs/promises";

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
  const response = await readFile("src/app/data.json", "utf-8");
  const fulldata: TData = await JSON.parse(response);
  const data: DestinationType[] = fulldata.destinations;
  let destination: DestinationType = name
    ? data.find((dest) => dest.name.toLowerCase() == name) ?? data[0]
    : data[0];
  return destination;
}

export async function fetchTechnologyData(
  index: number
): Promise<TechnologyType> {
  const response = await readFile("src/app/data.json", "utf-8");
  const fulldata: TData = await JSON.parse(response);
  const data: TechnologyType[] = fulldata.technology;
  let technology: TechnologyType = index ? data[index] : data[0];
  return technology;
}

export async function fetchCrewData(index: number): Promise<CrewMemberType> {
  const response = await readFile("src/app/data.json", "utf-8");
  const fulldata: TData = await JSON.parse(response);
  const data: CrewMemberType[] = fulldata.crew;
  let crewMember: CrewMemberType = index ? data[index] : data[0];
  return crewMember;
}
