import { useEffect, useRef } from "react";

// One-time IntersectionObserver-based scroll reveal. Deliberately plain CSS +
// vanilla IntersectionObserver (no animation library) -- see src/index.css's
// [data-reveal] rules for the actual transition. Disconnects after the first
// intersection so elements don't re-animate on repeated scroll passes.
function useReveal<T extends HTMLElement = HTMLDivElement>(threshold: number = 0.15) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (typeof IntersectionObserver === "undefined") {
            node.setAttribute("data-visible", "true");
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    node.setAttribute("data-visible", "true");
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}

export default useReveal;
