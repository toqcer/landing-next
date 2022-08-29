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
                    className={`capitalize text-fancy-purple-light block font-semibold ${
                        isCenter && 'text-center'
                    }`}
                >
                    {subtext}
                </span>
            )}
            <h2
                className={`text-4xl font-bold ${
                    className && className
                } text-fancy-purple`}
            >
                {text}
            </h2>
        </>
    );
}
