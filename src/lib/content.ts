import fs from "node:fs";
import path from "node:path";

import yaml from "js-yaml";

type Link = {
  label: string;
  url: string;
};

type Profile = {
  name: string;
  affiliation: string;
  photo: {
    src: string;
    alt: string;
  };
};

type Publication = {
  title: string;
  authors: string;
  venue: string;
  links?: Link[];
};

type Publications = {
  peerReviewed: Publication[];
  preprints: Publication[];
  other: Publication[];
};

type CareerItem = {
  role: string;
  organization: string;
  start: string;
  end: string;
};

type EducationItem = {
  degree: string;
  institution: string;
  start: string;
  end: string;
};

type AwardItem = {
  title: string;
  organization: string;
};

type Experience = {
  career: CareerItem[];
  education: EducationItem[];
  awards: AwardItem[];
};

type Links = {
  links: Link[];
};

export type PortfolioContent = {
  profile: Profile;
  publications: Publications;
  experience: Experience;
  links: Link[];
};

const dataDirectory = path.join(process.cwd(), "src", "data");

const readYaml = <T>(fileName: string): T => {
  const filePath = path.join(dataDirectory, fileName);
  const file = fs.readFileSync(filePath, "utf8");

  return yaml.load(file) as T;
};

export const getPortfolioContent = (): PortfolioContent => {
  const profile = readYaml<Profile>("profile.yaml");
  const publications = readYaml<Publications>("publications.yaml");
  const experience = readYaml<Experience>("experience.yaml");
  const links = readYaml<Links>("links.yaml");

  return {
    profile,
    publications,
    experience,
    links: links.links,
  };
};

export type { AwardItem, CareerItem, EducationItem, Link, Publication };
