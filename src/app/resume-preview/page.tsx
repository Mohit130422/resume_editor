import ResumeTemplate from "@/components/ResumeTemplate";
import DownloadResumeButton from "@/components/DownloadResumeButton";

export const metadata = {
  title: "Resume preview",
  robots: { index: false, follow: false },
};

/**
 * Sirf development ke liye: /resume-preview par jaakar dekh sakte ho ki
 * PDF exactly kaisi banegi. Recruiter ko yeh URL share karne ki zaroorat nahi.
 */
export default function ResumePreviewPage() {
  return (
    <div className="min-h-screen bg-mist-soft px-4 py-10">
      <div className="mx-auto max-w-[830px]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-xl font-bold text-ink-deep">
              Resume preview
            </h1>
            <p className="mt-1 text-sm text-muted">
              Yeh exactly wahi layout hai jo PDF me export hota hai.
            </p>
          </div>
          <DownloadResumeButton />
        </div>

        <div className="overflow-x-auto">
          <ResumeTemplate preview />
        </div>
      </div>
    </div>
  );
}
