import { PDFWorker } from "pdfjs-dist/legacy/build/pdf";

export const setPdfWorker = () => {
  if (typeof window === "undefined") return null;
  return new PDFWorker();
};
