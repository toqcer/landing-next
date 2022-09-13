export default function HeadingSection({
    text,
    subtext = null,
    className = '',
    isCenter = true,
}) {
    return (
        <>
            {subtext && (
                <span
                    className={`capitalize text-fancy-purple block font-semibold ${
                        isCenter && 'text-center'
                    }`}
                >
                    {subtext}
                </span>
            )}
            <h2
                className={`text-4xl font-bold text-midnight-blue ${className} ${
                    isCenter && 'text-center'
                }`}
            >
                {text}
            </h2>
        </>
    );
}
