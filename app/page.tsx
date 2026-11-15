import { profile } from "@/data/profile";

export default function Home() {
  return (
    <section className="home">
      <h1 className="name">{profile.name}</h1>
      <p className="subtitle">{profile.subtitle}</p>
      <a className="home-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </section>
  );
}
