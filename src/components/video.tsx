// components/Video.tsx
type VideoProps = {
    src: string;
    alt?: string;
};

export default function Video({ src, alt }: VideoProps) {
    if (!src) return null;

    return (
        <video
            src={src}
            controls
            style={{
                marginTop: '2rem',
                marginBottom: '2rem',
                width: '100%',
                maxWidth: '960px',
                borderRadius: '12px',
                objectFit: 'cover',
                display: 'block',
            }}
        >
            {alt ? <track kind="descriptions" label={alt} /> : null}
            Your browser does not support the video tag.
        </video>
    );
}
