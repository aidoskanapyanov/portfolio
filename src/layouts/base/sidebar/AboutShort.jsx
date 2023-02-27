import { Link } from "react-router-dom";

export default function AboutShort() {
  return (
    <section className="py-10">
      <h1 className="mb-6 uppercase font-medium tracking-widest">About</h1>
      <p className="mb-6 text-sm tracking-wide font-light">
        Hi, I&apos;m Michael. I like building things. I am a Stanford ICME
        graduate, YC Alumni, and the co-founder and CTO of Arthena. Before
        Arthena I was at Matroid, Planet, Planetary Resources, Facebook, and
        SEDS.
      </p>
      <Link
        to="/about"
        className="p-4 text-xs font-medium uppercase border-2 tracking-widest hover:bg-white"
      >
        Learn more
      </Link>
    </section>
  );
}
