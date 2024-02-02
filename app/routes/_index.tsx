import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Benedikt Schniepp" },
    { name: "description", content: "Welcome to my personal website!" },
  ];
};

export default function Index() {
  return <h1>Test</h1>;
}
