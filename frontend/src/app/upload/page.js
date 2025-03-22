"use client";
import { useState } from "react";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setPdfWorker } from "@/utils/pdfworker";

const extractTextFromPDF = async (file) => {
  try {
    const pdfjsLib = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      fullText += pageText + "\n";
    }

    return fullText.trim();
  } catch (error) {
    console.error("PDF parsing error:", error);
    throw new Error("Failed to extract text from PDF");
  }
};

export default function CVUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const router = useRouter();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (
        selectedFile.type === "application/pdf" ||
        selectedFile.type.includes("word")
      ) {
        setFile(selectedFile);
        setError("");
      } else {
        setError("Only PDF or DOCX files are allowed.");
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setIsAnalyzing(true);
      setError("");

      let textContent;
      if (file.type === "application/pdf") {
        textContent = await extractTextFromPDF(file);
      } else if (file.type.includes("word")) {
        textContent = await file.text();
      }

      console.log("Extracted text content:", textContent); // Debug log

      const response = await axios.post(
        "/api/analyze",
        {
          cvText: textContent,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const results = response.data;
      console.log("Analysis results:", results); // Debug log

      // Store results and redirect
      localStorage.setItem("cvAnalysis", JSON.stringify(results));
      router.push("/result");
    } catch (err) {
      console.error("Upload error:", err); // Debug log
      setError(err.message || "Failed to analyze CV");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 shadow-lg bg-white rounded-2xl w-96">
        <div className="flex flex-col items-center gap-4">
          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <Upload className="w-12 h-12 text-gray-500" />
            <span className="text-gray-600 mt-2">Click to upload CV</span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
          </label>
          {file && <p className="text-green-600">Selected: {file.name}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleUpload}
            disabled={!file || isAnalyzing}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg disabled:bg-gray-400"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze CV"}
          </button>
        </div>
      </div>
    </div>
  );
}
