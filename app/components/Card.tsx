"use client";

import { useState } from "react";
import 'remixicon/fonts/remixicon.css';

export default function Card() {
  const [items] = useState([
    {
      image: <i className="ri-search-line"></i>,
      title: "Search Engine Optimization",
      description: "Enhance your website's visibility and ranking on search engines through strategic search engine optimization techniques"
    },
    {
      image: <i className="ri-thumb-up-line"></i>,
      title: "Social Media Strategy",
      description: "Engage your audience and build your brand with a tailored social media strategy that drives results."
    },
    {
      image: <i className="ri-line-chart-fill"></i>,
      title: "Reporting and Analysis",
      description: "Leverage detailed reporting and analysis to gain insights and make data-driven decisions for your business growth."
    }
  ]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-6 border-2 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4 text-blue-600">{item.image}</div>
            <h3 className="text-xl font-semibold mb-3 text-center">{item.title}</h3>
            <p className="text-gray-700 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
