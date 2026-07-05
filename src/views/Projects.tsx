import { useState } from "react";
import {
    ChevronDown,
    ExternalLink,
    FileText,
    PlayCircle,
    Video,
    Bot,
    AudioWaveform,
    Printer,
    Brain,
    Scan,
    Glasses,
    Flame,
    Shuffle,
    Snowflake,
    BarChart3,
    Folder,
    type LucideIcon,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Disclosure from "../components/Disclosure";
import IconLink from "../components/IconLink";
import { GithubIcon } from "../components/BrandIcons";
import PROJECTS from "../models/Project";
import { isChromiumBrowser } from "../lib/browser";

const PROJECT_ICONS: Record<string, LucideIcon> = {
    AudioWaveform,
    Printer,
    Brain,
    Scan,
    Glasses,
    Flame,
    Shuffle,
    Snowflake,
    BarChart3,
};

function Projects() {
    const [openIds, setOpenIds] = useState<Set<string>>(new Set());
    const [isChromium] = useState(isChromiumBrowser);

    const toggle = (id: string) => {
        setOpenIds((prev) => {
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
        <section id="projects" className="px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-5xl">
                <Reveal>
                    <SectionHeading number="03" label="Projects" />
                </Reveal>
                <div>
                    {PROJECTS.map((project, i) => {
                        const open = openIds.has(project.id);
                        const ProjectIcon = PROJECT_ICONS[project.icon] ?? Folder;
                        return (
                            <Reveal key={project.id} delay={Math.min(i * 40, 240)} className="border-t border-border first:border-t-0">
                                <button
                                    type="button"
                                    onClick={() => toggle(project.id)}
                                    aria-expanded={open}
                                    className="w-full text-left py-6 flex items-start gap-4 sm:gap-6"
                                >
                                    <div className="hidden sm:flex w-12 h-12 shrink-0 items-center justify-center bg-surface border border-border text-accent">
                                        <ProjectIcon size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-sm text-text-muted pt-1 w-6 shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-baseline justify-between gap-4">
                                            <h3 className="font-heading font-semibold text-lg text-heading">
                                                {project.name}
                                            </h3>
                                            <ChevronDown
                                                className={`shrink-0 text-text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                                                size={18}
                                            />
                                        </div>
                                        <p className="text-text-muted mt-1">{project.shortDescription}</p>
                                        <p className="text-sm text-text-muted mt-2">
                                            {project.technologies.map((t) => t.title).join(" · ")}
                                        </p>
                                    </div>
                                </button>
                                <Disclosure open={open}>
                                    <div className="pb-8 pl-0 sm:pl-[6.5rem]">
                                        <div className="space-y-3 max-w-prose">
                                            {project.longDescription.map((paragraph, j) => (
                                                <p key={j} className="text-text leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
                                            {project.play && (!project.chromiumOnly || isChromium) && (
                                                <span className={project.desktopOnly ? "hidden sm:inline-flex" : "inline-flex"}>
                                                    <IconLink
                                                        href={project.play}
                                                        label="Live Demo"
                                                        icon={<PlayCircle size={16} />}
                                                        internal
                                                    />
                                                </span>
                                            )}
                                            {project.source && (
                                                <IconLink href={project.source} label="Source" icon={<GithubIcon className="w-4 h-4" />} />
                                            )}
                                            {project.paper && (
                                                <IconLink href={project.paper} label="Paper" icon={<FileText size={16} />} />
                                            )}
                                            {project.video && (
                                                <IconLink href={project.video} label="Video" icon={<Video size={16} />} />
                                            )}
                                            {project.model && (
                                                <IconLink href={project.model} label="Model" icon={<Bot size={16} />} />
                                            )}
                                            {project.info && (
                                                <IconLink href={project.info} label="Info" icon={<ExternalLink size={16} />} />
                                            )}
                                        </div>
                                    </div>
                                </Disclosure>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;
