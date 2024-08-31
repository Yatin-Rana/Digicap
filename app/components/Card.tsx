"use client";

import { useState } from "react";
import 'remixicon/fonts/remixicon.css';

export function Card() {
  const [items, setItems] = useState([
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
    <div className="flex justify-center w-4/5 mx-auto mt-4 gap-4 mb-4 ">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-1/3 p-4 border-2">
          <div className="text-3xl mb-2">{item.image}</div>
          <div className="text-xl font-semibold mb-2">{item.title}</div>
          <div className="text-gray-700 text-center">{item.description}</div>
        </div>
      ))}
    </div>
  );
}
// bg-[#effaff]