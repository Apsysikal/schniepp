import type { MetaFunction } from "@remix-run/node";
import {
  AmericanFlagIcon,
  GermanFlagIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SwissFlagIcon,
} from "~/components/icons";

export const meta: MetaFunction = () => {
  return [
    { title: "B. Schniepp" },
    {
      name: "description",
      content:
        "Über zehn Jahre Erfahrung in der Gebäudeautomation, hobbymässige Web- und Appentwicklung und begeisterter Boulderer.",
    },
  ];
};

export default function Index() {
  return (
    <main>
      <InfoCard />
    </main>
  );
}

function InfoCard() {
  return (
    <div className="font-sans w-full min-h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-2xl p-2 relative">
        <div className="shadow-xl bg-white rounded-t-2xl px-14 pt-10 pb-8 flex flex-col gap-5">
          <img
            className="rounded-full max-w-28 max-h-28 border-2 border-cyan-900"
            width={112}
            height={112}
            src="portrait.jpeg"
            alt="Portrait von Benedikt S."
          />
          <em className="font-light">
            Smarte Gebäude für eine nachhaltige Zukunft.
          </em>
          <h1 className="text-5xl tracking-tight font-light text-cyan-900">
            Benedikt Schniepp
          </h1>
          <p className="text-lg text-balance">
            Über zehn Jahre Erfahrung in der Gebäudeautomation, hobbymässige
            Web- und Appentwicklung und begeisterter Boulderer. Kontaktiere mich
            über eine meiner Kontaktmöglichkeiten.
          </p>
        </div>
        <div className="shadow-xl bg-cyan-900 text-white rounded-b-2xl py-5 px-14 flex justify-between">
          <ul className="flex gap-5">
            <li>
              <a href="mailto:placeholder@schniepp.ch">
                <MailIcon className="h-6 w-6" />
                <span className="sr-only">Schick mir eine Mail</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/benedikt-schniepp"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">Link zu meinem Linkedin-Profil</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/apsysikal"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="h-6 w-6" />
                <span className="sr-only">Link zu meinem Github-Profil</span>
              </a>
            </li>
          </ul>
          <ul className="flex gap-5">
            <li>
              <SwissFlagIcon className="h-6" />
              <span className="sr-only">Ich spreche Schweizerdeutsch</span>
            </li>
            <li>
              <GermanFlagIcon className="h-6" />
              <span className="sr-only">Ich spreche Deutsch</span>
            </li>
            <li>
              <AmericanFlagIcon className="h-6" />
              <span className="sr-only">Ich spreche Englisch</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
