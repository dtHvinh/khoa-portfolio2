type BeforeAfterProps = {
  index: number;
  channel: string;
  category: string;
};

export default function BeforeAfter({ index, channel, category }: BeforeAfterProps) {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-[1fr_2fr] sm:gap-4">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-line bg-gradient-to-br from-zinc-900 via-black to-zinc-950">
          <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
            Before
          </span>
        </div>
        <div className="group relative aspect-video overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-zinc-900 via-black to-blue-950/40">
          <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
            After
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur transition-transform duration-500 group-hover:scale-110">
              <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-foreground" />
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 font-mono text-xs tracking-[0.15em] text-muted uppercase">
        {String(index).padStart(2, "0")} — Channel: {channel} · {category}
      </p>
    </div>
  );
}
