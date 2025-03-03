"use client";

import { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Clock,
  ChevronRight,
  BarChart2,
  Award,
  Briefcase,
  Target,
  Settings,
  Download,
  RefreshCw,
} from "lucide-react";

export default function Dashboard() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [analysisStatus, setAnalysisStatus] = useState("pending");
  const [uploadError, setUploadError] = useState(null);

  // Mock user data
  const userData = {
    name: "Ram Thapa",
    lastUpload: "2083-02-28",
    resumeScore: 85,
    matchedJobs: 24,
    improvements: 3,
  };

  // Mock recent activities
  const recentActivities = [
    {
      id: 1,
      action: "Resume analyzed",
      date: "2 hours ago",
      status: "completed",
    },
    {
      id: 2,
      action: "Job matches found",
      date: "1 day ago",
      status: "completed",
    },
    {
      id: 3,
      action: "Profile updated",
      date: "2 days ago",
      status: "completed",
    },
  ];
  // paxi ta backend bata aayako lai milauna paryo

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file) => {
    try {
      setUploadError(null);

      // Validate file type
      if (!file.type.includes("pdf")) {
        setUploadError("Please upload a PDF file");
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError("File size should be less than 5MB");
        return;
      }

      setUploadedFile(file);
      setAnalysisStatus("analyzing");

      // Create FormData
      const formData = new FormData();
      formData.append("resume", file);

      // Send to backend
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setAnalysisStatus("completed");

      // Handle successful upload
      console.log("Upload successful:", data);
    } catch (error) {
      console.error("Upload error:", error);
      setAnalysisStatus("error");
      setUploadError(error.message || "Failed to upload file");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Dashboard Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {userData.name}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Let's optimize your resume and find your perfect job match
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upload Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Resume Upload
              </h2>

              {/* Upload Area */}
              <a href="/upload">
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    isDragging
                      ? "border-primary bg-primary/5"
                      : "border-gray-300"
                  } ${
                    uploadError ? "border-red-500" : ""
                  } transition-colors duration-200`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center">
                    <Upload
                      className={`h-12 w-12 ${
                        isDragging
                          ? "text-primary"
                          : uploadError
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                    <p className="mt-4 text-sm font-medium text-gray-900">
                      Drag and drop your resume here, or{" "}
                      <label className="text-primary hover:text-primary/80 cursor-pointer">
                        browse
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf"
                          onChange={(e) => handleFileUpload(e.target.files[0])}
                        />
                      </label>
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      PDF files only, max 5MB
                    </p>
                    {uploadError && (
                      <p className="mt-2 text-sm text-red-500">{uploadError}</p>
                    )}
                  </div>
                </div>
              </a>
              {/* Upload Status */}
              {uploadedFile && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {uploadedFile.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {analysisStatus === "analyzing" && (
                      <RefreshCw className="h-5 w-5 text-primary animate-spin" />
                    )}
                    {analysisStatus === "completed" && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {analysisStatus === "error" && (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <BarChart2 className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">
                      Resume Score
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {userData.resumeScore}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">
                      Job Matches
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {userData.matchedJobs}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <Target className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">
                      Improvements
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {userData.improvements}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-full ${
                          activity.status === "completed"
                            ? "bg-green-100"
                            : "bg-yellow-100"
                        }`}
                      >
                        {activity.status === "completed" ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Clock className="h-5 w-5 text-yellow-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Next Steps */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Next Steps
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Upload className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Upload your resume
                    </p>
                    <p className="text-xs text-gray-500">
                      Start by uploading your current resume
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <BarChart2 className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Get your analysis
                    </p>
                    <p className="text-xs text-gray-500">
                      Review your resume's strengths and weaknesses
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Improve your score
                    </p>
                    <p className="text-xs text-gray-500">
                      Apply suggestions to enhance your resume
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="flex items-center">
                    <Download className="h-5 w-5 text-gray-400 mr-3" />
                    Download Resume
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-gray-400 mr-3" />
                    Account Settings
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
