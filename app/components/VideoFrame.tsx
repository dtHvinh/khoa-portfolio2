type VideoFrameProps = {
  title: string;
  embedUrl?: string;
};

/** A 16:9 video frame — renders an embed if a URL is provided, otherwise a play affordance placeholder. */
export default function VideoFrame({ title, embedUrl }: VideoFrameProps) {
  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-zinc-900 via-black to-blue-950/40">
      {embedUrl ? (
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={`Play ${title}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur transition-transform duration-500 group-hover:scale-110">
            <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-foreground" />
          </span>
        </button>
      )}
    </div>
  );
}
