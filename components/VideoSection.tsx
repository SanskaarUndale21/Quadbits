"use client";
import { useEffect, useRef, useState } from "react";
import { Download, FileText, Play, X } from "lucide-react";
import { site } from "@/data/site";
import { Heading, Section } from "./ui";

export default function VideoSection() {
  const v = site.video;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const hasVideo = v.url.length > 0;

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <Section id="video">
      <Heading sub="A short introduction of about two minutes: who we are, what we have built, and why this team fits the problem.">
        Meet the team behind the build.
      </Heading>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <button
          onClick={() => hasVideo && setOpen(true)}
          disabled={!hasVideo}
          aria-label={hasVideo ? "Play team introduction video" : "Team introduction video, coming soon"}
          className="group relative aspect-video w-full overflow-hidden border border-line bg-surface disabled:cursor-default"
        >
          {v.poster && <img src={v.poster} alt="" className="absolute inset-0 size-full object-cover" loading="lazy" />}
          <div className="grid-bg absolute inset-0" aria-hidden="true" />
          <div className="absolute inset-0 grid place-items-center">
            <span className={`grid size-20 place-items-center rounded-full border ${hasVideo ? "border-cyan bg-bg/60 text-cyan group-hover:bg-cyan group-hover:text-bg" : "border-line text-muted"} transition-colors`}>
              <Play size={30} aria-hidden="true" />
            </span>
          </div>
          {!hasVideo && (
            <span className="absolute bottom-4 left-4 right-4 text-left text-sm text-muted">
              Video coming soon. Set the file in data/site.ts under video.url.
            </span>
          )}
        </button>

        <div>
          <h3 className="text-sm text-muted">Chapters</h3>
          <ol className="mt-3 divide-y divide-line border-y border-line">
            {v.chapters.map((c) => (
              <li key={c.at} className="flex gap-4 py-3 text-sm">
                <span className="w-10 font-display text-cyan">{c.at}</span>
                <span>{c.label}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            {v.transcriptUrl && (
              <a href={v.transcriptUrl} className="flex min-h-11 items-center gap-2 hover:text-cyan"><FileText size={16} /> Transcript</a>
            )}
            {v.downloadUrl && (
              <a href={v.downloadUrl} download className="flex min-h-11 items-center gap-2 hover:text-cyan"><Download size={16} /> Download</a>
            )}
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === dialogRef.current && setOpen(false)}
        aria-label="Team introduction video"
        className="m-auto w-[min(100%-2rem,64rem)] border border-line bg-bg p-0 text-ink backdrop:bg-black/80"
      >
        {open && hasVideo && (
          <div className="relative">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute right-2 top-2 z-10 grid size-11 place-items-center bg-bg/80 hover:text-cyan"
            >
              <X />
            </button>
            {v.kind === "embed" ? (
              <iframe src={v.url} title="Squadbits team introduction" allow="fullscreen; picture-in-picture" className="aspect-video w-full" />
            ) : (
              <video src={v.url} poster={v.poster || undefined} controls autoPlay playsInline className="aspect-video w-full bg-black">
                {v.subtitlesUrl && <track kind="subtitles" src={v.subtitlesUrl} srcLang="en" label="English" default />}
              </video>
            )}
          </div>
        )}
      </dialog>
    </Section>
  );
}
