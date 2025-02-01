import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SetupOrganization = () => {
  const [form, setForm] = useState({
    companyName: "",
    websiteUrl: "",
    description: "",
  });
  const [metaDescription, setMetaDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchMetaDescription = async (url) => {
    setIsLoading(true);
    try {
      // Simulate fetching meta description (replace with actual API call)
      const response = await fetch(`/api/fetch-meta`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setMetaDescription(data.metaDescription || "No meta description found");
    } catch (error) {
      console.error("Error fetching meta description:", error);
      setMetaDescription("Failed to fetch meta description");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "websiteUrl" && value) {
      await fetchMetaDescription(value);
    }
  };

  const handleNext = () => {
    navigate("/scraping");
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex justify-center items-center min-h-screen">
    <div className=" flex flex-col items-start w-[30rem] ml-20 mt-8">
    <h1 className="text-5xl font-bold text-black mb-4">
          Let's see if we are a good fit.
        </h1>
        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
          Schedule a call with our team.
        </h2>
        <p className="text-gray-500 text-lg mb-6 mt-10">
          We're excited to see if we are a good fit. Expect a response within 24 hours.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg cursor-pointer">
          Our Portfolio →
        </button>
    </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 p-2 text-center">
          AI Organization Setup
        </h1>
        <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />

        <div className="space-y-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website URL
            </label>
            <input
              type="url"
              name="websiteUrl"
              value={form.websiteUrl}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="https://example.com"
            />
          </div>

          {isLoading && (
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              Fetching meta description...
            </div>
          )}

          {metaDescription && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h3 className="text-blue-700 font-medium mb-2">
                Meta Description
              </h3>
              <p className="text-gray-600">{metaDescription}</p>
            </div>
          )}

          {metaDescription && (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all cursor-pointer"
            >
              Next Step
              <span>→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SetupOrganization;