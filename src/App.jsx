import { useMemo } from "react";
import "./index.css";

const LINKS = {
  portfolio: "https://www.daniel-mason.dev/",
  linkedin: "https://www.linkedin.com/in/daniel-mason-dev/",
};

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "workstyle", label: "Work Style" },
  { id: "communication", label: "Communication" },
  { id: "ux", label: "UX Lens" },
  { id: "support", label: "How to Help" },
  { id: "signals", label: "Signals" },
  { id: "favorites", label: "Favourites" },
  { id: "testimonial", label: "Testimonial" },
];
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Section({ id, title, subtitle, children }) {
  return (
    <section className="section" id={id}>
      <div className="sectionHeader">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : <span />}
      </div>
      {children}
    </section>
  );
}

function App() {
  const kpis = useMemo(
    () => [
      { k: "Best working hours", v: "Morning to early afternoon" },
      { k: "Collaboration default", v: "Clear goals & early feedback" },
      { k: "Motivated by", v: "Useful outcomes & learning" },
      { k: "Communication", v: "Direct, respectful, solution-oriented" },
    ],
    [],
  );

  return (
    <>
      <header className="topbar">
        <div className="container">
          <div className="topbarInner">
            <div className="brand" role="banner" aria-label="Site brand">
              <img
                src="/personal_band_logo.png"
                className="logo"
                aria-hidden="true"
              />
              <div className="brandText">
                <strong>Daniel Mason</strong>
                <span>Personal User Manual</span>
              </div>
            </div>

            <nav className="nav" aria-label="Primary">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToId(s.id)}
                  type="button"
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container">
        {/* HERO */}
        <section className="hero" aria-label="Intro">
          <div className="heroGrid">
            <Card>
              <h1 className="h1">How to work best with me</h1>
              <p className="sub">
                This is a practical guide for teammates and collaborators. Think
                of it as UX-style documentation: it reduces ambiguity, creates
                shared understanding, and helps the team move faster with fewer
                misunderstandings.
              </p>

              <div className="actions">
                <a
                  className="pill pillPrimary"
                  href={LINKS.portfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Portfolio
                </a>
                <a
                  className="pill"
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn
                </a>
                <button
                  className="pill pillSecondary"
                  type="button"
                  onClick={() => {
                    const originalTitle = document.title;
                    document.title = "Daniel-Mason-Personal-User-Manual";
                    window.print();
                    setTimeout(() => {
                      document.title = originalTitle;
                    }, 500);
                  }}
                  title="Print to PDF"
                >
                  PDF export: <strong>Daniel-Mason-Personal-User-Manual</strong>
                </button>
              </div>

              <div className="quote">
                <strong>Core principle:</strong> Simple solutions create the
                best experiences - for users and for teams.
              </div>

              <div className="kpis" aria-label="Quick facts">
                {kpis.map((x) => (
                  <div className="kpi" key={x.k}>
                    <strong>{x.k}</strong>
                    <span>{x.v}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 style={{ margin: 0, fontSize: 16 }}>At-a-glance</h2>
              <ul className="list">
                <li>
                  <strong>Preferred name:</strong> Daniel
                </li>
                <li>
                  <strong>Default mode:</strong> Calm, focused, collaborative
                </li>
                <li>
                  <strong>Strengths:</strong> Problem solving, implementation,
                  system thinking
                </li>
                <li>
                  <strong>Values:</strong> Respect, honesty, reliability,
                  clarity
                </li>
              </ul>

              <div className="tagRow" aria-label="Tags">
                {[
                  "Frontend",
                  "Full Stack",
                  "UX-aware",
                  "Accessibility",
                  "Documentation",
                  "Team-first",
                ].map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* OVERVIEW */}
        <Section
          id="overview"
          title="Overview"
          subtitle="Who I am as a teammate"
        >
          <div className="grid2">
            <Card>
              <p className="sub">
                I’m a full stack software developer with strong frontend focus
                and a UX mindset. I care about building experiences that are
                intuitive, accessible, and maintainable. In teams, I’m often the
                person translating intent into implementation while keeping
                usability and long-term sustainability in view.
              </p>
              <ul className="list">
                <li>I like clear goals and a shared definition of “done.”</li>
                <li>I prefer early alignment to avoid rework later.</li>
                <li>
                  I’m happy in cross-functional teams where design & dev
                  collaborate closely.
                </li>
              </ul>
            </Card>

            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>What to call me</h3>
              <ul className="list">
                <li>
                  <strong>Preferred:</strong> Daniel
                </li>
                <li>
                  <strong>Also okay:</strong> Dan - (informal)
                </li>
                <li>
                  <strong>Please avoid:</strong> overly casual nicknames in
                  professional settings
                </li>
              </ul>

              <div className="quote">
                <strong>Motivating phrases:</strong> “Clear plan.”, “Nice
                simplification.”, and “That improved the UX.”
              </div>
            </Card>
          </div>
        </Section>

        {/* WORK STYLE */}
        <Section id="workstyle" title="Work style">
          <div className="grid2">
            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>How I like to work</h3>
              <ul className="list">
                <li>Clear objectives, then autonomy on execution.</li>
                <li>
                  Focus time for deep work (fewer interrupts, fewer context
                  switches).
                </li>
                <li>Small checkpoints to confirm direction.</li>
              </ul>
              <div className="quote">
                If requirements are moving fast, I rely on quick written notes
                (even short ones) so the team stays aligned.
              </div>
            </Card>

            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>
                How I like to be managed
              </h3>
              <ul className="list">
                <li>Trust & clarity beats micromanagement.</li>
                <li>Tell me what “good” looks like; I’ll get us there.</li>
                <li>Feedback early and often is ideal.</li>
              </ul>
              <div className="tagRow">
                {["Goal-oriented", "Low ego", "Iterative", "Pragmatic"].map(
                  (t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ),
                )}
              </div>
            </Card>
          </div>
        </Section>

        {/* COMMUNICATION */}
        <Section id="communication" title="Communication">
          <div className="grid2">
            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>What works best</h3>
              <ul className="list">
                <li>Direct, respectful, solution-focused messages.</li>
                <li>Concrete examples over vague critiques.</li>
                <li>One clear ask per message when possible.</li>
              </ul>
              <div className="quote">
                <strong>Best feedback format:</strong> “Here’s what works…,
                here’s the risk…, and here’s a suggested change.”
              </div>
            </Card>

            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>Meetings</h3>
              <ul className="list">
                <li>I appreciate agendas & outcomes.</li>
                <li>I’ll ask clarifying questions to prevent rework.</li>
                <li>I’m happy to take notes if it helps alignment.</li>
              </ul>
              <div className="quote">
                If I’m quiet, I’m usually processing and synthesizing - not
                disengaged.
              </div>
            </Card>
          </div>
        </Section>

        {/* UX LENS */}
        <Section id="ux" title="UX lens">
          <div className="grid2">
            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>
                How I apply “effective documentation”
              </h3>
              <ul className="list">
                <li>
                  Write down decisions (even short bullets) to reduce ambiguity.
                </li>
                <li>
                  Keep a single source of truth for requirements and scope.
                </li>
                <li>Track iterations so changes have context.</li>
              </ul>
              <div className="quote">
                I treat team alignment like UX alignment: if the “mental model”
                differs, outcomes suffer.
              </div>
            </Card>

            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>
                Information architecture for collaboration
              </h3>
              <ul className="list">
                <li>Clear labels, clear categories, predictable navigation.</li>
                <li>Prefer simple structures over “clever” ones.</li>
                <li>Design docs should be scannable and searchable.</li>
              </ul>
              <div className="tagRow">
                {["User flow", "Journey map", "IA", "Accessibility"].map(
                  (t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ),
                )}
              </div>
            </Card>
          </div>

          <Card style={{ marginTop: 14 }}>
            <h3 style={{ margin: 0, fontSize: 14 }}>
              User Flow: “Collaborating with Daniel”
            </h3>
            <div className="flow" aria-label="User flow steps">
              <div className="flowStep">
                <div className="dot" aria-hidden="true" />
                <div>
                  <h3>1) Align on goal & definition of done</h3>
                  <p>
                    We confirm the outcome, constraints, and what success looks
                    like.
                  </p>
                </div>
              </div>
              <div className="flowStep">
                <div className="dot" aria-hidden="true" />
                <div>
                  <h3>2) Draft approach with quick checkpoint</h3>
                  <p>
                    I’ll propose a plan (or options). We pick the simplest valid
                    path.
                  </p>
                </div>
              </div>
              <div className="flowStep">
                <div className="dot" aria-hidden="true" />
                <div>
                  <h3>3) Deep work with periodic updates</h3>
                  <p>
                    Focused execution with small status notes to avoid
                    surprises.
                  </p>
                </div>
              </div>
              <div className="flowStep">
                <div className="dot" aria-hidden="true" />
                <div>
                  <h3>4) Review/iterate</h3>
                  <p>
                    Feedback is welcome; we adjust quickly and document the
                    decision.
                  </p>
                </div>
              </div>
            </div>

            <div className="quote" style={{ marginTop: 12 }}>
              <strong>Journey mindset:</strong> I’m always watching for friction
              points, (handoffs, unclear ownership, missing info) the same way
              we’d watch for UX friction.
            </div>
          </Card>
        </Section>

        {/* SUPPORT */}
        <Section id="support" title="How others can help">
          <div className="grid2">
            <Card>
              <ul className="list">
                <li>Share context early - links, constraints, examples.</li>
                <li>
                  If priorities change, a quick call and/or notes saves hours.
                </li>
                <li>Tell me if something feels unclear or off-track.</li>
              </ul>
            </Card>

            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>
                What makes me feel valued
              </h3>
              <ul className="list">
                <li>Recognition for impact (not just effort).</li>
                <li>Trust and ownership.</li>
                <li>Constructive feedback that helps me improve.</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* SIGNALS */}
        <Section id="signals" title="Signals to look for">
          <div className="grid2">
            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>Good signals</h3>
              <ul className="list">
                <li>I’m proactively sharing progress and tradeoffs.</li>
                <li>I’m engaged in problem-solving conversations.</li>
                <li>I’m shipping outcomes and tightening details.</li>
              </ul>
            </Card>

            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>
                Signals I may need support
              </h3>
              <ul className="list">
                <li>I’m asking many clarifying questions repeatedly.</li>
                <li>I’m spending too long refining (perfection loop).</li>
                <li>I’m quieter than usual because I’m overloaded.</li>
              </ul>
              <div className="quote">
                Best response: quick alignment & reduce scope ambiguity.
              </div>
            </Card>
          </div>
        </Section>

        {/* FAVORITES */}
        <Section id="favorites" title="Favourites">
          <div className="grid2">
            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>Quote</h3>
              <div className="quote" style={{ marginTop: 10 }}>
                “Simplicity is the ultimate sophistication.”
              </div>
              <div className="tagRow">
                {["Clarity", "Calm structure", "Purposeful action"].map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Card>

            <Card>
              <h3 style={{ margin: 0, fontSize: 14 }}>Off-work</h3>
              <ul className="list">
                <li>Gaming - (StarCraft 2, and Pokemon TCG)</li>
                <li>Learning new tools and technologies</li>
                <li>Mentorship/helping others grow</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* TESTIMONIAL */}
        <Section id="testimonial" title="Testimonial">
          <Card>
            <h3 style={{ margin: 0, fontSize: 14 }}>
              Justine Dascil - Senior Software Engineer
            </h3>
            <p className="sub" style={{ marginTop: 0 }}>
              “I am pleased to write this letter of recommendation for Daniel
              Mason, who has been a part of our support team. Daniel has
              demonstrated exceptional technical ability, problem-solving
              skills, and a strong eagerness to learn and grow. During our time
              working together, he has shown his ability to quickly grasp new
              technologies and apply them effectively has been impressive.
              Beyond his technical skills, Daniel is an excellent team player
              who communicates effectively and collaborates seamlessly with
              colleagues across different teams. He is proactive in seeking
              feedback and continuously strive to enhance his knowledge and
              skills. His positive attitude and dedication make them a great
              asset to any organization. I highly recommend Daniel for any
              opportunity in software development/support engineering. He has
              the potential to grow into an outstanding engineer, and I am
              confident that he will bring the same level of commitment and
              excellence to their next role.”
            </p>
          </Card>
          <br />
          <Card>
            <h3 style={{ margin: 0, fontSize: 14 }}>Phuong Nguyen - Partner</h3>
            <p className="sub" style={{ marginTop: 0 }}>
              “Daniel approaches challenges thoughtfully and consistently looks
              for practical, user-centered solutions. He’s collaborative, calm
              under pressure, and cares about clarity and quality.”
            </p>
          </Card>
          <br />
          <Card>
            <h3 style={{ margin: 0, fontSize: 14 }}>
              Gregory Mena, Ed.d. - CEO of Seymour Accessibility
            </h3>
            <p className="sub" style={{ marginTop: 0 }}>
              “Daniel helped the company develop one of our first software
              products. The project involved cross-platform API design and
              development. It was a challenging task that he met with grace. He
              is a patient problem solver and excellent communicator. He works
              well within a team using Agile methodology and has a great
              attitude. He is focused, analytical and solution-oriented. I
              recommend Daniel without reservation.”
            </p>
          </Card>
          <br />
          <Card>
            <h3 style={{ margin: 0, fontSize: 14 }}>
              Tom St.Onge, CD, P.Eng, PMP, rmc - Co-worker at Department of
              National Defence
            </h3>
            <p className="sub" style={{ marginTop: 0 }}>
              “I first crossed paths with Daniel while working on a large
              digital transformation project involving a public sector client.
              The project team was well versed in project delivery but lacked
              some of the technical understanding to find solutions for the
              back-end challenges. Enter Daniel. Daniel was a breath of fresh
              air for the project team, brought new perspectives, and worked
              tirelessly to find solutions to the project roadblocks. He is an
              effective communicator, possesses a high degree of technical
              competence, and has a great work ethic. For software projects or
              more generically, projects that involve organizational digital
              transformation, I highly recommend Daniel.”
            </p>
          </Card>
          <br />
          <Card>
            <h3 style={{ margin: 0, fontSize: 14 }}>
              Gary Brewin - IT Professional
            </h3>
            <p className="sub" style={{ marginTop: 0 }}>
              “Daniel has demonstrated outstanding skills in development,
              significantly enhancing our web applications' user interface and
              experience. His collaborative spirit is noteworthy; through peer
              programming and active engagement in problem-solving, Daniel has
              fostered a culture of learning and innovation within our team. His
              dedication to mentoring new team members, combined with a genuine
              passion for knowledge sharing, has greatly facilitated their
              smooth integration and growth. I confidently recommend Daniel as a
              dedicated, reliable, and skilled developer who will bring talent,
              enthusiasm, and a commitment to growth to any team.”
            </p>
          </Card>
          <br />
          <Card>
            <h3 style={{ margin: 0, fontSize: 14 }}>
              Sara Paranuk - Software Developer
            </h3>
            <p className="sub" style={{ marginTop: 0 }}>
              “I worked with Daniel on a startup project and he was a wonderful
              person to collaborate with. He's not afraid to put his full effort
              into his projects and is a wonderful communicator. I would highly
              recommend him to anyone who's looking for a reliable developer and
              a great team mate.”
            </p>
          </Card>
        </Section>

        <footer className="footer">
          <div className="footerContent">
            <div>
              <strong>Daniel Mason</strong> · Personal User Manual
            </div>

            <div className="footerLinks">
              <a
                href={LINKS.portfolio}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Daniel Mason portfolio"
              >
                <img src="/folder.png" alt="Portfolio" />
              </a>

              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Daniel Mason LinkedIn"
              >
                <img src="/linkedin.png" alt="LinkedIn" />
              </a>

              <button
                type="button"
                onClick={() => {
                  const originalTitle = document.title;
                  document.title = "Daniel-Mason-Personal-User-Manual";
                  window.print();
                  setTimeout(() => {
                    document.title = originalTitle;
                  }, 500);
                }}
                className="printButton"
                title="Print to PDF"
              >
                Print/Save PDF
              </button>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
