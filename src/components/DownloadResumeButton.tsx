"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { generateResumePdf } from "@/lib/generateResumePdf";
import Icon from "@/components/Icon";
import { RESUME_ROOT_ID } from "@/components/ResumeTemplate";

type Variant = "solid" | "outline" | "light";

const variantClass: Record<Variant, string> = {
  solid:
    "bg-teal text-white hover:bg-teal-deep shadow-[0_10px_30px_-12px_rgba(18,164,180,0.75)]",
  outline:
    "border border-ink/25 text-ink hover:border-teal hover:text-teal bg-white",
  light: "bg-white text-ink hover:bg-mist",
};

export default function DownloadResumeButton({
  variant = "solid",
  className = "",
  label = "Download resume",
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  const [status, setStatus] = useState<"idle" | "working" | "error">("idle");

  async function handleClick() {
    setStatus("working");
    try {
      await generateResumePdf({
        rootId: RESUME_ROOT_ID,
        fileName: profile.resumeFileName,
      });
      setStatus("idle");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className="inline-flex flex-col items-start gap-1.5">
      <button
        type="button"
        onClick={handleClick}
        disabled={status === "working"}
        className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 ${variantClass[variant]} ${className}`}
      >
        {status === "working" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Building your PDF
          </>
        ) : (
          <>
            <Icon
              name="download"
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
            {label}
          </>
        )}
      </button>

      {status === "error" ? (
        <span className="text-xs text-red-600">
          PDF generate nahi ho paayi. Page reload karke dobara try karein.
        </span>
      ) : null}
    </div>
  );
}
