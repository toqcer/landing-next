export default function HeadingSection({ text, subtext = null }) {
    return (
        <>
            {subtext && (
                <span className="capitalize text-fancy-purple font-semibold">
                    {subtext}
                </span>
            )}
            <h2 className="text-4xl font-bold">{text}</h2>
        </>
    );
}
