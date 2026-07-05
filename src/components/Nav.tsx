import { useEffect, useState } from "react";

const SECTIONS: Array<{ id: string; label: string }> = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
];

export interface INavProps {
    activeId?: string;
}

function Nav({ activeId }: INavProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 px-6 transition-colors duration-200 ${
                scrolled ? "bg-surface/80 backdrop-blur border-b border-border" : "bg-transparent"
            }`}
        >
            <nav className="mx-auto max-w-5xl py-4 flex items-center justify-between">
                <a href="#home" className="font-heading font-semibold text-heading tracking-wide text-sm sm:text-base">
                    Matthew Rubino
                </a>
                <ul className="hidden sm:flex items-center gap-8">
                    {SECTIONS.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${
                                    activeId === section.id ? "text-accent" : "text-text-muted hover:text-text"
                                }`}
                            >
                                {section.label}
                                <span
                                    className={`absolute left-0 bottom-0 h-px bg-accent transition-transform duration-200 origin-left ${
                                        activeId === section.id ? "w-full scale-x-100" : "w-full scale-x-0"
                                    }`}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
