import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PUBLICATIONS from "../models/Publication";

function Publications() {
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

    const toggle = (id: string) => {
        setExpandedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    return (
        <section id="publications" className="px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-5xl">
                <Reveal>
                    <SectionHeading number="04" label="Publications" />
                </Reveal>
                <div>
                    {PUBLICATIONS.map((pub, i) => {
                        const expanded = expandedIds.has(pub.id);
                        return (
                            <Reveal key={pub.id} delay={i * 60} className="border-t border-border first:border-t-0 py-8">
                                <h3 className="font-heading font-semibold text-lg text-heading">
                                    {pub.title}
                                </h3>
                                <p className="text-sm text-text-muted mt-2">
                                    {pub.authors.map((author, j) => (
                                        <span key={j}>
                                            {j > 0 && ", "}
                                            <span className={author === "Matthew Rubino" ? "text-accent font-medium" : ""}>
                                                {author}
                                            </span>
                                        </span>
                                    ))}
                                </p>
                                <p className="text-sm text-text-muted mt-1">
                                    {pub.venue} · {pub.date}
                                </p>
                                <p className={`text-text leading-relaxed mt-4 max-w-prose ${expanded ? "" : "line-clamp-3"}`}>
                                    {pub.abstract}
                                </p>
                                <div className="flex items-center gap-6 mt-3">
                                    <button
                                        type="button"
                                        onClick={() => toggle(pub.id)}
                                        className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
                                    >
                                        {expanded ? "Show less" : "Read more"}
                                    </button>
                                    {pub.link && (
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="link-underline text-sm text-accent"
                                        >
                                            View paper →
                                        </a>
                                    )}
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Publications;
