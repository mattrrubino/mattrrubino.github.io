function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center px-6">
            <div className="mx-auto max-w-5xl w-full flex flex-col-reverse sm:flex-row items-center sm:items-center gap-10 sm:gap-16">
                <div className="flex-1">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted mb-4">
                        Software Engineer
                    </p>
                    <h1 className="font-heading font-bold text-heading text-5xl sm:text-6xl md:text-7xl leading-tight">
                        Matthew Rubino
                    </h1>
                    <p className="mt-6 max-w-prose text-lg text-text-muted">
                        I'm a full-stack developer who thrives in high-ownership
                        environments, working well through ambiguous and evolving
                        requirements.
                    </p>
                    <div className="mt-10">
                        <a
                            href="mailto:mrrubin04@gmail.com"
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium font-heading tracking-wide bg-accent text-bg hover:bg-accent-hover transition-colors duration-200"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
                <div className="shrink-0">
                    <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 border border-border overflow-hidden">
                        <img
                            src="/headshot.jpg"
                            alt="Matthew Rubino"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <a
                href="#about"
                aria-label="Scroll to About section"
                className="scroll-cue absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
            >
                <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
                <span className="block w-px h-8 bg-text-muted" />
            </a>
        </section>
    );
}

export default Hero;
