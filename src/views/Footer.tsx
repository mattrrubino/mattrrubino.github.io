import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";

const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/mattrrubino", icon: GithubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mrrubino", icon: LinkedinIcon },
];

function Footer() {
    return (
        <footer className="px-6 py-12 border-t border-border">
            <div className="mx-auto max-w-5xl">
                <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-2">
                        Get in touch
                    </p>
                    <a
                        href="mailto:mrrubin04@gmail.com"
                        className="link-underline font-heading font-semibold text-xl sm:text-2xl text-heading hover:text-accent transition-colors duration-200"
                    >
                        mrrubin04@gmail.com
                    </a>
                    <div className="flex items-center gap-5 mt-4">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-200"
                            >
                                <link.icon className="w-4 h-4" />
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-border">
                    <p className="text-sm text-text-muted">© Matthew Rubino {new Date().getFullYear()}</p>
                    <a
                        href="#home"
                        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-200"
                    >
                        Back to top
                        <ArrowUp size={14} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
