type VideoFrameProps = {
  title: string;
  /** Direct video file URL (e.g. a Vercel Blob .mp4). */
  src?: string;
  /** Optional poster image. If omitted, a frame from the video itself is shown as the preview. */
  poster?: string;
};

/** A 16:9 video frame — plays a direct video file if a src is provided, otherwise shows a placeholder. */
export default function VideoFrame({ title, src, poster }: VideoFrameProps) {
  // Without an explicit poster, seek to an early frame so the video shows a still preview
  // (drawn from the video itself — no separate thumbnail asset needed).
  const previewSrc = src && !poster ? `${src}#t=0.5` : src;

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-zinc-900 via-black to-blue-950/40">
      {src ? (
        <video
          className="h-full w-full object-cover"
          src={previewSrc}
          poster={poster}
          controls
          preload="metadata"
          playsInline
          aria-label={title}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur transition-transform duration-500 group-hover:scale-110">
            <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-foreground" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}
