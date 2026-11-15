import Link from "next/link";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <section className="home">
      <h1 className="name">{profile.name}</h1>
      <p className="subtitle">{profile.subtitle}</p>

      <div className="rule" />

      <p className="interests">
        Math but for fun, the history of sheep and clothing, language learning,
        hiking, painting, writing, and plants.
      </p>

      <div className="home-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <Link href="/cv">CV →</Link>
      </div>
    </section>
  );
}
