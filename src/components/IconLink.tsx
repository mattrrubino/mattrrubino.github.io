import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface IIconLinkProps {
    href: string;
    label: string;
    icon: ReactNode;
    internal?: boolean;
}

function IconLink({ href, label, icon, internal }: IIconLinkProps) {
    const className =
        "inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors duration-200";

    if (internal) {
        return (
            <Link
                to={href}
                target="_blank"
                rel="noreferrer"
                className={className}
                aria-label={label}
                onClick={(e) => e.stopPropagation()}
            >
                {icon}
                <span>{label}</span>
            </Link>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={className}
            aria-label={label}
            onClick={(e) => e.stopPropagation()}
        >
            {icon}
            <span>{label}</span>
        </a>
    );
}

export default IconLink;
