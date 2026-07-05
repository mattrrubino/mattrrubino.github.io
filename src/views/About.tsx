import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const SPEC_ROWS: Array<{ label: string; lines: string[] }> = [
  { label: "Currently at", lines: ["Software Developer", "Epic Systems"] },
  { label: "Education", lines: ["CS MEng · Cornell · May 2025", "CS BS · SUNY Buffalo · December 2023"] },
];

function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading number="01" label="About" />
        </Reveal>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <Reveal className="md:basis-3/5 max-w-prose">
            <p className="text-text leading-relaxed">
              I've spent the past several years building software across a range of
              business domains, including ERP, digital manufacturing, and healthcare.
              Understanding the business problem is just as interesting to me as
              writing the code.
            </p>
            <p className="text-text leading-relaxed mt-6">
              I'm comfortable with ambiguity and shifting priorities, and I'm at my
              best when owning a problem end to end. When working, I consistently
              follow my core values of efficiency, pragmatism, and integrity.
            </p>
            <p className="text-text leading-relaxed mt-6">
              Outside of work, I'm physically active. I like to boulder, ski, weight
              lift, and run!
            </p>
          </Reveal>
          <Reveal delay={100} className="md:basis-2/5">
            <dl className="flex flex-col">
              {SPEC_ROWS.map((row, i) => (
                <div key={i} className="border-t border-border py-4 first:border-t-0 first:pt-0">
                  {row.label && (
                    <dt className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-1">
                      {row.label}
                    </dt>
                  )}
                  <dd className="text-heading">
                    {row.lines.map((line, j) => (
                      <span key={j} className="block">{line}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
