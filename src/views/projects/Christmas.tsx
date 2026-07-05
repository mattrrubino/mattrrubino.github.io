import { useState } from "react";
import { isChromiumBrowser } from "../../lib/browser";

function ChristmasView() {
    const [isChromium] = useState(isChromiumBrowser);

    if (!isChromium) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-bg px-6">
                <p className="text-center max-w-prose text-heading">
                    Ho-Ho-Ho Down only works in Chromium-based browsers (Chrome, Edge, etc). Please open this page in one of those to play.
                </p>
            </div>
        );
    }

    return (
        <div className="h-screen w-screen">
            <iframe title="Ho-Ho-Ho Down" src="/frames/christmas/index.html" className="h-full w-full border-none overflow-hidden" />
        </div>
    );
}

export default ChristmasView;
