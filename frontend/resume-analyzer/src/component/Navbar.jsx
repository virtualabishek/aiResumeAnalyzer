"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, FileText, User } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path) && path !== "/";
  };

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Upload Resume", href: "/login" },
    { name: "Dashboard", href: "/login" },
    { name: "Login", href: "/login" },
  ];

  const serviceItems = [
    { name: "Resume Analysis", href: "/services/analysis" },
    { name: "Suggestions", href: "/services/suggestions" },
    { name: "Job Matching", href: "/services/matching" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <FileText className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary hidden sm:block">
                ResumeAnalyzer
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-1 py-2 text-sm font-medium transition-colors group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`flex items-center text-sm font-medium transition-colors ${
                  serviceItems.some((item) => isActive(item.href))
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-1" role="menu">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(item.href)
                          ? "text-primary bg-gray-50"
                          : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      }`}
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block pl-3 pr-4 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary border-l-4 border-primary bg-gray-50"
                    : "text-gray-500 border-l-4 border-transparent hover:text-primary hover:bg-gray-50 hover:border-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Services section in mobile menu */}
            <div className="space-y-1">
              <button
                onClick={() => {
                  const servicesSubmenu =
                    document.getElementById("services-submenu");
                  if (servicesSubmenu) {
                    servicesSubmenu.classList.toggle("hidden");
                  }
                }}
                className={`w-full text-left pl-3 pr-4 py-2 text-base font-medium transition-colors ${
                  serviceItems.some((item) => isActive(item.href))
                    ? "text-primary border-l-4 border-primary bg-gray-50"
                    : "text-gray-500 border-l-4 border-transparent hover:text-primary hover:bg-gray-50 hover:border-primary"
                }`}
              >
                Services
                <ChevronDown className="inline ml-1 h-4 w-4" />
              </button>
              <div id="services-submenu" className="hidden pl-6">
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block pl-3 pr-4 py-2 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary border-l-4 border-primary bg-gray-50"
                        : "text-gray-500 border-l-4 border-transparent hover:text-primary hover:bg-gray-50 hover:border-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
