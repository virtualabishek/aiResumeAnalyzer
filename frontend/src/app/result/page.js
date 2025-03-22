"use client";
import { useEffect, useState } from "react";
import {
  FaTrophy,
  FaChartLine,
  FaThumbsUp,
  FaTools,
  FaKeyboard,
  FaEdit,
  FaSpinner,
  FaArrowLeft,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheck,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import {
  Download,
  FileText,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Code,
  Eye,
  EyeOff,
} from "lucide-react";

// Simplified PDF styles without custom fonts
const pdfStyles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: "#1a365d",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#2d3748",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: "1 solid #e2e8f0",
  },
  content: {
    fontSize: 12,
    marginBottom: 8,
    lineHeight: 1.5,
  },
  list: {
    marginLeft: 15,
  },
  listItem: {
    fontSize: 11,
    marginBottom: 5,
  },
});

const modernPdfStyles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    color: "#2D3748",
  },
  header: {
    marginBottom: 20,
    borderBottom: "2 solid #4A5568",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    color: "#2B6CB0",
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 10,
    color: "#4A5568",
    flexDirection: "row",
    gap: 20,
    marginTop: 8,
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#2B6CB0",
    borderBottom: "1 solid #E2E8F0",
    paddingBottom: 4,
    marginBottom: 8,
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 2,
  },
  companyInfo: {
    fontSize: 10,
    color: "#4A5568",
    marginBottom: 4,
  },
  achievementList: {
    marginLeft: 15,
  },
  achievementItem: {
    fontSize: 10,
    marginBottom: 3,
  },
  skillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillItem: {
    fontSize: 10,
    backgroundColor: "#EDF2F7",
    padding: "4 8",
    borderRadius: 4,
  },
  projectItem: {
    marginBottom: 10,
  },
});

// Simplified PDF Component
const AnalysisPDF = ({ results }) => (
  <Document>
    <Page size="A4" style={pdfStyles.page}>
      <View style={pdfStyles.header}>
        <Text style={pdfStyles.title}>CV Analysis Report</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>Overall Score</Text>
        <Text style={pdfStyles.content}>{results?.score || 0}/100</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>Strengths</Text>
        {results?.strengths?.map((strength, i) => (
          <Text key={i} style={pdfStyles.listItem}>
            • {strength}
          </Text>
        ))}
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>Areas for Improvement</Text>
        {results?.improvements?.map((improvement, i) => (
          <Text key={i} style={pdfStyles.listItem}>
            • {improvement}
          </Text>
        ))}
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>Keywords</Text>
        <Text style={pdfStyles.content}>{results?.keywords?.join(", ")}</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>Sample Improvement</Text>
        <Text style={pdfStyles.content}>
          Section: {results?.sampleImprovement?.section || ""}
        </Text>
        <Text style={pdfStyles.content}>
          Original: {results?.sampleImprovement?.original || ""}
        </Text>
        <Text style={pdfStyles.content}>
          Improved: {results?.sampleImprovement?.rewritten || ""}
        </Text>
      </View>
    </Page>
  </Document>
);

const ImprovedCVPDF = ({ results }) => {
  const { extractedData, improvedCV } = results;

  return (
    <Document>
      <Page size="A4" style={modernPdfStyles.page}>
        {/* Header Section */}
        <View style={modernPdfStyles.header}>
          <Text style={modernPdfStyles.name}>
            {extractedData.personalDetails.name}
          </Text>
          <View style={modernPdfStyles.contactInfo}>
            <Text>{extractedData.personalDetails.email}</Text>
            <Text>{extractedData.personalDetails.phone}</Text>
            <Text>{extractedData.personalDetails.location}</Text>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={modernPdfStyles.section}>
          <Text style={modernPdfStyles.sectionTitle}>Professional Summary</Text>
          <Text style={modernPdfStyles.content}>
            {improvedCV.professionalSummary}
          </Text>
        </View>

        {/* Core Competencies */}
        <View style={modernPdfStyles.section}>
          <Text style={modernPdfStyles.sectionTitle}>Core Competencies</Text>
          <View style={modernPdfStyles.skillGrid}>
            {improvedCV.coreCompetencies.map((skill, index) => (
              <Text key={index} style={modernPdfStyles.skillItem}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        {/* Professional Experience */}
        <View style={modernPdfStyles.section}>
          <Text style={modernPdfStyles.sectionTitle}>
            Professional Experience
          </Text>
          {improvedCV.experience.map((exp, index) => (
            <View key={index} style={modernPdfStyles.experienceItem}>
              <Text style={modernPdfStyles.jobTitle}>{exp.title}</Text>
              <Text style={modernPdfStyles.companyInfo}>
                {exp.company} | {exp.duration} | {exp.location}
              </Text>
              <View style={modernPdfStyles.achievementList}>
                {exp.achievements.map((achievement, i) => (
                  <Text key={i} style={modernPdfStyles.achievementItem}>
                    • {achievement}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Technical Skills */}
        <View style={modernPdfStyles.section}>
          <Text style={modernPdfStyles.sectionTitle}>Technical Skills</Text>
          <View style={modernPdfStyles.content}>
            <Text style={modernPdfStyles.skillCategory}>Programming:</Text>
            <View style={modernPdfStyles.skillGrid}>
              {improvedCV.technicalSkills.programming.map((skill, index) => (
                <Text key={index} style={modernPdfStyles.skillItem}>
                  {skill}
                </Text>
              ))}
            </View>

            <Text style={modernPdfStyles.skillCategory}>Tools:</Text>
            <View style={modernPdfStyles.skillGrid}>
              {improvedCV.technicalSkills.tools.map((tool, index) => (
                <Text key={index} style={modernPdfStyles.skillItem}>
                  {tool}
                </Text>
              ))}
            </View>

            <Text style={modernPdfStyles.skillCategory}>Platforms:</Text>
            <View style={modernPdfStyles.skillGrid}>
              {improvedCV.technicalSkills.platforms.map((platform, index) => (
                <Text key={index} style={modernPdfStyles.skillItem}>
                  {platform}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Projects */}
        <View style={modernPdfStyles.section}>
          <Text style={modernPdfStyles.sectionTitle}>
            Projects & Achievements
          </Text>
          {improvedCV.projects.map((project, index) => (
            <View key={index} style={modernPdfStyles.projectItem}>
              <Text style={modernPdfStyles.jobTitle}>{project.name}</Text>
              <Text style={modernPdfStyles.content}>{project.description}</Text>
              <View style={modernPdfStyles.skillGrid}>
                {project.technologies.map((tech, i) => (
                  <Text key={i} style={modernPdfStyles.skillItem}>
                    {tech}
                  </Text>
                ))}
              </View>
              <Text style={modernPdfStyles.achievementItem}>
                Outcome: {project.outcome}
              </Text>
            </View>
          ))}
        </View>

        {/* Additional Skills */}
        <View style={modernPdfStyles.section}>
          <Text style={modernPdfStyles.sectionTitle}>Additional Skills</Text>
          <View style={modernPdfStyles.skillGrid}>
            {improvedCV.additionalSkills.map((skill, index) => (
              <Text key={index} style={modernPdfStyles.skillItem}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default function ResultsPage() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [matchingJobs, setMatchingJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cvKeywords, setCvKeywords] = useState([]);
  const [isPdfVisible, setIsPdfVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const analysisResults = localStorage.getItem("cvAnalysis");

    if (analysisResults) {
      try {
        const parsedResults = JSON.parse(analysisResults);

        // Handle nested structure from API
        if (parsedResults.analysis) {
          setResults(parsedResults.analysis);
          if (Array.isArray(parsedResults.analysis.keywords)) {
            setCvKeywords(
              parsedResults.analysis.keywords.map((k) => k.toLowerCase())
            );
          }
        }
        // Handle direct structure
        else {
          setResults(parsedResults);
          if (Array.isArray(parsedResults.keywords)) {
            setCvKeywords(parsedResults.keywords.map((k) => k.toLowerCase()));
          }
        }
      } catch (error) {
        console.error("Failed to parse analysis results:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/job_data.json");
        const jobData = await response.json();

        const filteredJobs = jobData.jobs.filter((job) => {
          return job.keywords.some((keyword) =>
            cvKeywords.includes(keyword.toLowerCase())
          );
        });

        filteredJobs.sort((a, b) => {
          const aMatches = a.keywords.filter((k) =>
            cvKeywords.includes(k.toLowerCase())
          ).length;
          const bMatches = b.keywords.filter((k) =>
            cvKeywords.includes(k.toLowerCase())
          ).length;
          return bMatches - aMatches;
        });

        setMatchingJobs(filteredJobs.slice(0, 3));
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch job data:", error);
        setIsLoading(false);
      }
    };

    if (cvKeywords.length > 0) {
      fetchJobs();
    } else {
      setIsLoading(false);
    }
  }, [cvKeywords]);

  if (loading) {
    return (
      <div className="loading-container">
        <FaSpinner className="spinner" />
        <p>Analyzing your CV...</p>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="error-container">
        <h2>No analysis results found</h2>
        <p>Please upload your CV to get an analysis</p>
        <Link href="/" className="back-button">
          <FaArrowLeft /> Go Back
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return <div className="job-loading">Finding matching jobs...</div>;
  }

  if (matchingJobs.length === 0) {
    return (
      <div className="no-jobs-message">
        No matching jobs found based on your CV keywords.
      </div>
    );
  }

  const scoreValue = Number.parseInt(results.score) || 0;
  const scorePercentage = Math.min(Math.max(scoreValue, 0), 100);

  const downloadPDF = async () => {
    if (!results) return;

    setIsDownloading(true);
    try {
      // Create blobs for both PDFs
      const analysisBlob = await pdf(
        <AnalysisPDF results={results.analysis} />
      ).toBlob();
      const improvedCVBlob = await pdf(
        <ImprovedCVPDF
          results={{
            extractedData: results.extractedData,
            improvedCV: results.improvedCV,
          }}
        />
      ).toBlob();

      // Download Analysis PDF
      const analysisUrl = URL.createObjectURL(analysisBlob);
      const analysisLink = document.createElement("a");
      analysisLink.href = analysisUrl;
      analysisLink.download = "cv-analysis-report.pdf";
      document.body.appendChild(analysisLink);
      analysisLink.click();
      document.body.removeChild(analysisLink);
      URL.revokeObjectURL(analysisUrl);

      // Download Improved CV PDF
      const improvedCVUrl = URL.createObjectURL(improvedCVBlob);
      const improvedCVLink = document.createElement("a");
      improvedCVLink.href = improvedCVUrl;
      improvedCVLink.download = "improved-cv.pdf";
      document.body.appendChild(improvedCVLink);
      improvedCVLink.click();
      document.body.removeChild(improvedCVLink);
      URL.revokeObjectURL(improvedCVUrl);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="results-container">
      <div className="results-header">
        <Link href="/" className="back-link">
          <FaArrowLeft /> Back
        </Link>
        <h1>CV Analysis Results</h1>
      </div>

      <div className="card score-card">
        <div className="card-header">
          <FaTrophy className="card-icon trophy" />
          <h2>Overall Score</h2>
        </div>
        <div className="score-display">
          <div className="score-circle">
            <span className="score-value">{results.score}</span>
          </div>
          <div className="score-bar-container">
            <div
              className="score-bar"
              style={{ width: `${scorePercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="results-grid">
        <div className="card strengths-card">
          <div className="card-header">
            <FaThumbsUp className="card-icon thumbs-up" />
            <h2>Strengths</h2>
          </div>
          <ul className="feature-list">
            {results.strengths.map((strength, index) => (
              <li key={index} className="feature-item">
                <span className="feature-bullet">✓</span>
                {strength}
              </li>
            ))}
          </ul>
        </div>

        <div className="card improvements-card">
          <div className="card-header">
            <FaTools className="card-icon tools" />
            <h2>Areas for Improvement</h2>
          </div>
          <ul className="feature-list">
            {results.improvements.map((improvement, index) => (
              <li key={index} className="feature-item">
                <span className="feature-bullet">!</span>
                {improvement}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card keywords-card">
        <div className="card-header">
          <FaKeyboard className="card-icon keyboard" />
          <h2>Keywords</h2>
        </div>
        <div className="keywords-container">
          {results.keywords.map((keyword, index) => (
            <span key={index} className="keyword-tag">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div className="card improvement-card">
        <div className="card-header">
          <FaEdit className="card-icon edit" />
          <h2>Sample Improvement</h2>
        </div>
        <div className="improvement-content">
          <div className="improvement-section">
            <h3>Section</h3>
            <p>{results.sampleImprovement.section}</p>
          </div>
          <div className="improvement-comparison">
            <div className="improvement-original">
              <h3>Original</h3>
              <p>{results.sampleImprovement.original}</p>
            </div>
            <div className="improvement-rewritten">
              <h3>Rewritten</h3>
              <p>{results.sampleImprovement.rewritten}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card chart-card">
        <div className="card-header">
          <FaChartLine className="card-icon chart" />
          <h2>CV Performance</h2>
        </div>
        <div className="chart-container">
          <div className="chart-bar-container">
            <div className="chart-label">Content</div>
            <div className="chart-bar-wrapper">
              <div
                className="chart-bar"
                style={{ width: `${Math.min(scoreValue + 10, 100)}%` }}
              ></div>
            </div>
          </div>
          <div className="chart-bar-container">
            <div className="chart-label">Format</div>
            <div className="chart-bar-wrapper">
              <div
                className="chart-bar"
                style={{ width: `${Math.min(scoreValue - 5, 100)}%` }}
              ></div>
            </div>
          </div>
          <div className="chart-bar-container">
            <div className="chart-label">Keywords</div>
            <div className="chart-bar-wrapper">
              <div
                className="chart-bar"
                style={{ width: `${Math.min(scoreValue + 5, 100)}%` }}
              ></div>
            </div>
          </div>
          <div className="chart-bar-container">
            <div className="chart-label">Impact</div>
            <div className="chart-bar-wrapper">
              <div
                className="chart-bar"
                style={{ width: `${Math.min(scoreValue - 10, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card job-card">
        <div className="card-header">
          <FaBriefcase className="card-icon briefcase" />
          <h2>Recommended Jobs</h2>
        </div>

        <div className="jobs-container">
          {matchingJobs.map((job, index) => {
            const matchCount = job.keywords.filter((k) =>
              cvKeywords.includes(k.toLowerCase())
            ).length;
            const matchPercentage = Math.round(
              (matchCount / job.keywords.length) * 100
            );

            return (
              <div key={index} className="job-item">
                <div className="job-match-indicator">
                  <div className="match-circle">
                    <span>{matchPercentage}%</span>
                  </div>
                  <div className="match-label">Match</div>
                </div>

                <div className="job-content">
                  <div className="job-company">
                    <div className="company-image">
                      {job.company_image ? (
                        <Image
                          src={job.company_image || "/placeholder.svg"}
                          alt={job.company_name}
                          width={50}
                          height={50}
                          style={{ objectFit: "cover" }}
                          onError={(e) => {
                            e.target.src = "company-image?height=50&width=50";
                          }}
                        />
                      ) : (
                        <div className="company-placeholder">
                          {job.company_name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="company-name">{job.company_name}</h3>
                      <p className="company-detail">{job.company_detail}</p>
                    </div>
                  </div>

                  <h3 className="job-title">{job.vacancy}</h3>

                  <div className="job-meta">
                    <div className="job-location">
                      <FaMapMarkerAlt />
                      <span>{job.location}</span>
                    </div>
                    <div className="job-date">
                      <FaCalendarAlt />
                      <span>
                        Posted: {new Date(job.posted_date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="job-keywords">
                    <h4>Matching Skills:</h4>
                    <div className="keyword-matches">
                      {job.keywords.map((keyword, idx) => (
                        <div
                          key={idx}
                          className={`keyword-chip ${
                            cvKeywords.includes(keyword.toLowerCase())
                              ? "matching"
                              : ""
                          }`}
                        >
                          {cvKeywords.includes(keyword.toLowerCase()) && (
                            <FaCheck className="match-icon" />
                          )}
                          {keyword}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="apply-button">Apply Now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* For the pdf view */}
      <div className="pdf-section">
        <div className="pdf-controls">
          <button
            onClick={() => setIsPdfVisible(!isPdfVisible)}
            className="pdf-control-btn pdf-view-btn"
          >
            {isPdfVisible ? (
              <>
                <EyeOff className="w-4 h-4" />
                <span>Hide PDF</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                <span>View PDF</span>
              </>
            )}
          </button>
          <button
            onClick={downloadPDF}
            disabled={isDownloading}
            className="pdf-control-btn pdf-download-btn"
          >
            <Download
              className={`w-4 h-4 ${isDownloading ? "animate-bounce" : ""}`}
            />
            <span>{isDownloading ? "Downloading..." : "Download PDF"}</span>
          </button>
        </div>

        {isPdfVisible && (
          <div className="pdf-viewer">
            <PDFViewer width="100%" height="500">
              <AnalysisPDF results={results.analysis} />
            </PDFViewer>
            <PDFViewer width="100%" height="500">
              <ImprovedCVPDF
                results={{
                  extractedData: results.extractedData,
                  improvedCV: results.improvedCV,
                }}
              />
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
  );
}
