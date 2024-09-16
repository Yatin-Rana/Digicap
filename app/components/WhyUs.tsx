"use client"
import { useState } from "react"
import 'remixicon/fonts/remixicon.css'

export default function WhyUs() {
    const [items] = useState([
        {
            image: <i className="ri-line-chart-line"></i>,
            title: "High Demand",
            description: "Digital marketing is in high demand as businesses increasingly prioritize their online presence. This demand creates ample opportunities for professionals to develop innovative strategies. As more companies focus on digital platforms, skilled marketers are more essential than ever."
        },
        {
            image: <i className="ri-file-text-line"></i>,
            title: "Measurable Results",
            description: "Digital marketing offers the advantage of measurable results through analytics. Marketers can track campaign performance and optimize strategies for better outcomes. This focus on data-driven decisions enhances return on investment"
        },
        {
            image: <i className="ri-box-3-line"></i>,
            title: "Variety and Versatality",
            description: "The field of digital marketing is rich in variety and versatility, offering numerous strategies and tools. Professionals can tailor their approaches to specific goals, fostering creativity. This adaptability is crucial for success in a dynamic industry."
        },
        {
            image: <i className="ri-notification-4-line"></i>,
            title: "Creative and Analytical",
            description: "Digital marketing blends creative and analytical skills, allowing for engaging content and data-driven insights. Creativity captures audience attention, while analytics refine strategies. This combination maximizes the impact of marketing efforts."
        },
        {
            image: <i className="ri-cursor-fill"></i>,
            title: "Continuous Learning",
            description: "Continuous learning is vital in digital marketing due to constant industry evolution. Staying informed about new trends and technologies is essential for competitiveness. This commitment to learning fosters innovation and adaptability."
        },
        {
            image: <i className="ri-mac-line"></i>,
            title: "Making a Difference",
            description: "Digital marketing can make a significant difference by influencing consumer behavior. Strategic campaigns connect with audiences, fostering brand loyalty. Effective marketing also raises awareness for important causes, driving positive change."
        },
    ])

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items.map((item, index) => (
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start bg-white rounded-xl shadow-md p-6" key={index}>
                        <div className="text-3xl sm:text-4xl text-white bg-purple-500 p-3 rounded-lg">
                            {item.image}
                        </div>
                        <div className="flex flex-col">
                            <h3 className="mb-2 font-bold text-xl sm:text-2xl">{item.title}</h3>
                            <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
