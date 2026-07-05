import type { JSX, ReactNode, CSSProperties } from "react";
import useReveal from "../hooks/useReveal";

export interface IRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    id?: string;
}

function Reveal({ children, className = "", delay = 0, id }: IRevealProps): JSX.Element {
    const ref = useReveal<HTMLDivElement>();
    const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

    return (
        <div ref={ref} id={id} data-reveal style={style} className={className}>
            {children}
        </div>
    );
}

export default Reveal;
