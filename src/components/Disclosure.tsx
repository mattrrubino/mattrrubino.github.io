import type { ReactNode } from "react";

export interface IDisclosureProps {
    open: boolean;
    children: ReactNode;
}

function Disclosure({ open, children }: IDisclosureProps) {
    return (
        <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
        >
            <div className="overflow-hidden">{children}</div>
        </div>
    );
}

export default Disclosure;
