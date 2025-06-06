function ProjectContent({
    content,
}: {
    content: string | string[];
}) {
    if (Array.isArray(content)) {
        return (
            <ul className="list-disc ml-5 space-y-1">
                {content.map((item, idx) => {
                    const [highlight, ...rest] = item.split(/:(.+)/);
                    const hasHighlight = rest.length > 0;
                    return (
                        <li key={idx}>
                            {hasHighlight ? (
                                <>
                                    <span className="font-bold text-[#21201b]">{highlight}:</span>
                                    <span> {rest[0]}</span>
                                </>
                            ) : (
                                item
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    }

    return <p>{content}</p>;
}

export default ProjectContent;