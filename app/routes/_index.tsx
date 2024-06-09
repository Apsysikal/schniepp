import type { MetaFunction } from "@remix-run/node";

import { MountainIllustration } from "~/components/illustrations";

export const meta: MetaFunction = () => [
  {
    title: "Benedikt Schniepp",
  },
  {
    name: "description",
    content: "Smarte Gebäude für eine nachhaltige Zukunft.",
  },
];

export default function Index() {
  return (
    <main>
      <div>
        <h2>Smarte Gebäude für eine nachhaltige Zukunft</h2>
        <MountainIllustration />
      </div>
    </main>
  );
}
