import { readFileSync } from "fs";
import path from "path";
import { parse } from "smol-toml";

type Link = { label: string; href: string };
type Metric = { value: string; label: string };
type IconCard = { icon: string; title: string; text: string };
type WorkflowItem = { step: string; title: string; text: string };
type FooterColumn = { title: string; links: Link[] };

export type HomeContent = {
  site: {
    brand: string;
    email: string;
    location: string;
    linkedin: string;
  };
  navigation: Link[];
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    image: string;
    imageAlt: string;
    primaryCta: Link;
    secondaryCta: Link;
  };
  metrics: Metric[];
  capabilitiesIntro: {
    eyebrow: string;
    heading: string;
    text: string;
  };
  capabilities: IconCard[];
  lab: {
    heading: string;
    text: string;
  };
  workflow: WorkflowItem[];
  useCasesIntro: {
    eyebrow: string;
    heading: string;
    badge: string;
  };
  useCases: IconCard[];
  contact: {
    eyebrow: string;
    heading: string;
    text: string;
    cta: Link;
    options: Array<{
      title: string;
      text: string;
    }>;
  };
  footer: {
    tagline: string;
    trust: string;
    copyright: string;
    columns: FooterColumn[];
  };
};

const contentPath = path.join(process.cwd(), "content", "home.toml");

export function getHomeContent(): HomeContent {
  const source = readFileSync(contentPath, "utf8");
  return parse(source) as unknown as HomeContent;
}
