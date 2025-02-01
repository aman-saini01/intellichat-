import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WebsiteScraping = () => {
  const [scrapedPages, setScrapedPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null); // Track the currently selected page
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [isScraping, setIsScraping] = useState(true); // Simulate scraping state
  const navigate = useNavigate();

  // Simulate scraping process
  useEffect(() => {
    const dummyPages = [
      {
        id: 1,
        url: "/about",
        status: "pending",
        chunks: [
          "Founded in 2020, our company has been at the forefront of AI innovation.",
          "Our team consists of over 50 AI specialists and researchers.",
          "We specialize in natural language processing and machine learning solutions.",
          "Located in Silicon Valley with offices worldwide.",
        ],
      },
      {
        id: 2,
        url: "/products",
        status: "pending",
        chunks: [
          "AI-powered chatbot platform with 99.9% uptime.",
          "Custom machine learning models for enterprise clients.",
          "Real-time data analytics dashboard with predictive insights.",
          "Cloud-based API solutions for seamless integration.",
        ],
      },
      {
        id: 3,
        url: "/services",
        status: "pending",
        chunks: [], // Empty chunks array
      },
    ];

    // Simulate scraping pages one by one
    const scrapeInterval = setInterval(() => {
      setScrapedPages((prev) => {
        const updatedPages = [...prev];
        const nextPageIndex = updatedPages.findIndex(
          (page) => page.status === "pending"
        );
        if (nextPageIndex !== -1) {
          updatedPages[nextPageIndex].status = "completed";
        }
        return updatedPages;
      });
    }, 2000); // Simulate scraping a page every 2 seconds

    // Simulate training progress
    const progressInterval = setInterval(() => {
      setTrainingProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(progressInterval);
        clearInterval(scrapeInterval);
        setIsScraping(false); // Stop scraping when progress is complete
        return prev;
      });
    }, 100); // Update progress every 100ms

    // Initialize dummy pages
    setScrapedPages(dummyPages);

    // Cleanup intervals
    return () => {
      clearInterval(scrapeInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // Toggle selected page
  const handlePageClick = (page) => {
    if (selectedPage?.id === page.id) {
      setSelectedPage(null); // Collapse if the same page is clicked again
    } else {
      setSelectedPage(page); // Expand the clicked page
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex justify-center items-center min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Website Scraping Progress
        </h2>

        {/* Loading State */}
        {isScraping && (
          <div className="flex items-center gap-2 mt-4 text-gray-600">
            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            Scraping website pages...
          </div>
        )}

        {/* Scraped Pages List */}
        <div className="space-y-4 mt-6">
          {scrapedPages.map((page) => (
            <div
              key={page.id}
              className={`border-2 ${
                page.status === "completed"
                  ? "border-green-200 hover:border-green-300"
                  : "border-gray-200 hover:border-gray-300"
              } rounded-lg p-4 cursor-pointer transition-colors`}
              onClick={() => handlePageClick(page)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{page.url}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    page.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {page.status}
                </span>
              </div>

              {/* Show scraped chunks if the page is selected */}
              {selectedPage?.id === page.id && (
                <div
                  className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${
                    selectedPage?.id === page.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {page.chunks.length > 0 ? (
                    page.chunks.map((chunk, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600"
                      >
                        {chunk}
                      </div>
                    ))
                  ) : (
                    <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
                      No data scraped from this page yet.
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Training Progress Bar */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800">
            Chatbot Training Progress
          </h3>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
              style={{ width: `${trainingProgress}%` }}
            />
          </div>
          <div className="text-right text-sm text-gray-600">
            {trainingProgress}%
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4 mt-6">
          <button
            onClick={() => navigate("/setup-organization")}
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
          >
            ← Back
          </button>
          <button
            onClick={() => navigate("/chatbot-integration")}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all cursor-pointer"
          >
            Continue Setup →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteScraping;