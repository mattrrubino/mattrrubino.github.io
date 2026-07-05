// Chromium detection for the Ho-Ho-Ho Down demo, whose shader isn't supported on Firefox/Safari.
// Prefers the standardized User-Agent Client Hints brand list, falling back to UA sniffing
// for browsers (Firefox, Safari) that don't implement it.
export function isChromiumBrowser(): boolean {
    if (typeof navigator === "undefined") return false;

    const brands = (navigator as Navigator & { userAgentData?: { brands?: { brand: string }[] } }).userAgentData?.brands;
    if (brands) {
        return brands.some((b) => b.brand === "Chromium");
    }

    const ua = navigator.userAgent;
    return /Chrome|Chromium|Edg/i.test(ua) && !/Firefox/i.test(ua);
}
