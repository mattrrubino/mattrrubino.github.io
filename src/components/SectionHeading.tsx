export interface ISectionHeadingProps {
    number: string;
    label: string;
}

function SectionHeading({ number, label }: ISectionHeadingProps) {
    return (
        <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-2">
                {number}
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-heading">
                {label}
            </h2>
        </div>
    );
}

export default SectionHeading;
