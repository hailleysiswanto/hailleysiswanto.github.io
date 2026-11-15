import { profile } from "@/data/profile";

export const metadata = {
  title: `CV — ${profile.name}`,
};

type Entry = { org: string; role?: string; dates: string; points: string[] };

const work: Entry[] = [
  {
    org: "Blenman Innovation Group",
    role: "Computational researcher for cancer cell biology research group",
    dates: "January 2026 – May 2026",
    points: [
      "Recognized specific need for secure interface due to sensitive patient data, researched multi-factor authentication methods, and wrote a report comparing the cost, customizability, security level, and scalability of each method. The team adopted my recommended method.",
      "Researched open-source virtual network computing (VNC) software, built a remote-desktop interface in Python tailored to cell biology research, and wrote installation and use documentation for users.",
    ],
  },
  {
    org: "Yale Club of Washington, DC",
    role: "Data and event organizer for alumni and student club",
    dates: "June 2025 – August 2025",
    points: [
      "Identified issue with unorganized data from 5,000+ alumni, collected member feedback to determine points of friction, and built organizational features to serve members’ needs. The outcome was an updatable spreadsheet organizable by class year, industry, location, college, and major, and used by students, alumni, and club admin for networking.",
      "Led several events with 200+ attendees by researching sponsors, venues, and guest speakers. Communicated my research via decision matrices.",
    ],
  },
  {
    org: "Yale University Berkeley College Office",
    role: "Residential college operations and event organization aide",
    dates: "March 2024 – Present",
    points: [
      "Collected feedback from 400+ students, determined what issues were most important to the community, organized projects into a prioritized list with timelines, and researched and budgeted solutions. Outcomes included increased accessibility infrastructure in dorms and a complete renovation of the student gym.",
      "Coordinated with several teams and considered differing schedules, budgets, and labor distribution to organize events including speaker events and community service.",
    ],
  },
  {
    org: "Yale University Student Technology Collaborative",
    role: "IT support and laptop repair tech",
    dates: "October 2024 – April 2025",
    points: [
      "Repaired client laptops, addressing both hardware and software issues including water damage and CPU failure. Used Ubuntu, Fedora, and Data Rescue 6 to recover client data.",
    ],
  },
];

const leadership: Entry[] = [
  {
    org: "Yale Women and Gender Minorities in Computer Science",
    role: "Board member",
    dates: "August 2023 – Present",
    points: [
      "Brought in 4 new club sponsors totaling a $4,000 increase in club funding. Increased professional network from fewer than 20 to 50+ contacts.",
      "Led a club visit to the Jane Street NYC office for 20 members to learn more about software engineering in non-tech contexts such as finance and trading.",
    ],
  },
  {
    org: "Yale Society of Women Engineers",
    role: "Board member",
    dates: "August 2023 – Present",
    points: [
      "Led programs such as “Planning your summer” and “Senior wisdom talks” for members to learn about careers and research in engineering.",
    ],
  },
];

function Section({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {entries.map((e) => (
        <div key={e.org} className="cv-entry">
          <div className="cv-entry-head">
            <h3>{e.org}</h3>
            <span className="cv-dates">{e.dates}</span>
          </div>
          {e.role && <p className="cv-role">{e.role}</p>}
          <ul>
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default function CVPage() {
  return (
    <article className="cv">
      <h1 className="name">{profile.name}</h1>
      <p className="cv-contact">
        {profile.location} <span>✶</span>{" "}
        <a href={`tel:+1${profile.phone.replace(/\D/g, "")}`}>{profile.phone}</a> <span>✶</span>{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>

      <div className="rule" />

      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-entry">
          <div className="cv-entry-head">
            <h3>Yale University</h3>
            <span className="cv-dates">Expected Graduation May 2028</span>
          </div>
          <ul>
            <li>B.S. Mathematics</li>
            <li>
              Relevant Coursework: Probability Theory, Discrete Mathematics, Ordinary
              Differential Equations, Data Structures and Programming Techniques, Operating
              Systems, Computer Architecture, Writing the Modern Essay
            </li>
          </ul>
        </div>
      </section>

      <Section title="Work Experience" entries={work} />
      <Section title="Leadership Experience" entries={leadership} />

      <section className="cv-section">
        <h2>Programming Languages &amp; Interests</h2>
        <ul>
          <li>SQL, C, Linux, Python, LaTeX</li>
          <li>Math but for fun, history of sheep and clothing, language learning, hiking, painting, writing, plants</li>
        </ul>
      </section>

      <a className="cv-download" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
        Download CV as PDF
      </a>
    </article>
  );
}
