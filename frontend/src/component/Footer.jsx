import {
  FileText,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">ResumeAnalyzer</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Revolutionizing the way you create and optimize your resume with
              AI-powered analysis and suggestions.
            </p>
            <p className="mt-4 text-sm text-gray-300">
              Developed by NeuraCore Team
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/upload"
                  className="text-base text-gray-300 hover:text-white transition duration-300"
                >
                  Resume Upload
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="text-base text-gray-300 hover:text-white transition duration-300"
                >
                  Resume Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/suggestions"
                  className="text-base text-gray-300 hover:text-white transition duration-300"
                >
                  Improvement Suggestions
                </Link>
              </li>
              <li>
                <Link
                  href="/job-matching"
                  className="text-base text-gray-300 hover:text-white transition duration-300"
                >
                  Job Matching
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-300 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-base text-gray-300 hover:text-white transition duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-gray-300 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-base text-gray-300 hover:text-white transition duration-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a
                  href="mailto:info@resumeanalyzer.com"
                  className="text-base text-gray-300 hover:text-white transition duration-300"
                >
                  resumeanayzer@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <a
                  href="tel:+1234567890"
                  className="text-base text-gray-300 hover:text-white transition duration-300"
                >
                  9862681874
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-base text-gray-300">
                  Bharatpur, Chitwan, Nepal
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition duration-300"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} ResumeAnalyzer by NeuraCore. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
