/* ============================================================================
 *  generateResumePdf
 *  ResumeTemplate ab khud A4 pages banata hai, isliye yahan sirf har page node
 *  ko capture karke PDF ke ek page par 1:1 rakha jaata hai.
 *  Koi image slicing nahi -> na text katta hai, na margin gayab hoti hai.
 * ========================================================================== */

import { RESUME_PAGE_CLASS } from "@/components/ResumeTemplate";

const A4_WIDTH_PT = 595.28;
const A4_HEIGHT_PT = 841.89;

type Options = {
  rootId: string;
  fileName: string;
};

export async function generateResumePdf({ rootId, fileName }: Options) {
  const root = document.getElementById(rootId);
  if (!root) throw new Error(`Resume root "${rootId}" not found`);

  const pageNodes = Array.from(
    root.querySelectorAll<HTMLElement>(`.${RESUME_PAGE_CLASS}`),
  );
  if (!pageNodes.length) {
    throw new Error("Resume pages ready nahi hain — thodi der baad try karein");
  }

  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas-pro"),
    import("jspdf"),
  ]);

  const pdf = new jsPDF({ unit: "pt", format: "a4", compress: true });

  for (let index = 0; index < pageNodes.length; index += 1) {
    const node = pageNodes[index];
    const canvas = await html2canvas(node, {
      scale: 2,
      backgroundColor: "#FFFFFF",
      useCORS: true,
      logging: false,
      width: node.offsetWidth,
      height: node.offsetHeight,
      windowWidth: node.offsetWidth,
    });

    if (index > 0) pdf.addPage();
    pdf.addImage(
      canvas.toDataURL("image/jpeg", 0.94),
      "JPEG",
      0,
      0,
      A4_WIDTH_PT,
      A4_HEIGHT_PT,
    );
  }

  pdf.save(fileName);
}
