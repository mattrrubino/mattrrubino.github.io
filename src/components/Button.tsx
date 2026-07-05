import type { ReactNode } from "react";

export interface IButtonProps {
    href: string;
    children: ReactNode;
    variant?: "filled" | "ghost";
}

function Button({ href, children, variant = "filled" }: IButtonProps) {
    const base = "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium font-heading tracking-wide transition-colors duration-200";
    const styles =
        variant === "filled"
            ? "bg-accent text-bg hover:bg-accent-hover"
            : "border border-border text-text hover:border-accent hover:text-accent";

    return (
        <a href={href} className={`${base} ${styles}`}>
            {children}
        </a>
    );
}

export default Button;
