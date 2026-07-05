import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import EXPERIENCES from "../models/Experience";

function Experience() {
    return (
        <section id="experience" className="px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-5xl">
                <Reveal>
                    <SectionHeading number="02" label="Experience" />
                </Reveal>
                <div className="border-l border-border">
                    {EXPERIENCES.map((exp, i) => (
                        <Reveal key={i} delay={i * 60} className="relative pl-8 pb-14 last:pb-0">
                            <span className="absolute left-[-4.5px] top-1.5 w-2 h-2 bg-accent" />
                            <div className="flex flex-col sm:flex-row sm:gap-10">
                                <div className="sm:w-40 shrink-0 mb-2 sm:mb-0">
                                    <p className="text-sm text-text-muted">
                                        {exp.start} – {exp.end}
                                    </p>
                                    <p className="text-sm text-text-muted">
                                        {exp.city}, {exp.state}
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading font-semibold text-lg text-heading">
                                        {exp.title}
                                    </h3>
                                    <p className="text-accent text-sm mb-3">{exp.organization}</p>
                                    <div className="space-y-3">
                                        {exp.description.map((paragraph, j) => (
                                            <p key={j} className="text-text leading-relaxed max-w-prose">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
