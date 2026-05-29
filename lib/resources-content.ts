import { readFileSync } from "fs";
import path from "path";
import { parse } from "smol-toml";

export type ResourceWork = {
  problem: string;
  published: string;
  paper: string;
  href?: string;
};

export type ResourcesContent = {
  page: {
    eyebrow: string;
    title: string;
    description: string;
  };
  works: ResourceWork[];
};

const contentPath = path.join(process.cwd(), "content", "resources.toml");

export function getResourcesContent(): ResourcesContent {
  const source = readFileSync(contentPath, "utf8");
  return parse(source) as unknown as ResourcesContent;
}
