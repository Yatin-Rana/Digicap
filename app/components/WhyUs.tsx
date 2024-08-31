"use client"
import { useState } from "react"
import 'remixicon/fonts/remixicon.css'

export default function () {
    const [item, setItem] = useState([
        {
            image: <i className="ri-line-chart-line"></i>
            , title: "High Demand", description: "Digital marketing is in high demand as businesses increasingly prioritize their online presence. This demand creates ample opportunities for professionals to develop innovative strategies. As more companies focus on digital platforms, skilled marketers are more essential than ever."
        },
        {
            image: <i className="ri-file-text-line"></i>
            , title: "Measurable Results", description: "Digital marketing offers the advantage of measurable results through analytics. Marketers can track campaign performance and optimize strategies for better outcomes. This focus on data-driven decisions enhances return on investment"
        },
        {
            image: <i className="ri-box-3-line"></i>
            , title: "Variety and Versatality", description: "The field of digital marketing is rich in variety and versatility, offering numerous strategies and tools. Professionals can tailor their approaches to specific goals, fostering creativity. This adaptability is crucial for success in a dynamic industry."
        },
        {
            image: <i className="ri-notification-4-line"></i>
            , title: "Creative and Analytical", description: "Digital marketing blends creative and analytical skills, allowing for engaging content and data-driven insights. Creativity captures audience attention, while analytics refine strategies. This combination maximizes the impact of marketing efforts."
        },
        {
            image: <i className="ri-cursor-fill"></i>
            , title: "Continuous Learning", description: "Continuous learning is vital in digital marketing due to constant industry evolution. Staying informed about new trends and technologies is essential for competitiveness. This commitment to learning fosters innovation and adaptability."
        },
        {
            image: <i className="ri-mac-line"></i>
            , title: "making a difference", description: "Digital marketing can make a significant difference by influencing consumer behavior. Strategic campaigns connect with audiences, fostering brand loyalty. Effective marketing also raises awareness for important causes, driving positive change."
        },
    ])
    return (<div className="grid grid-cols-2 gap-4 p-4 w-[80%] m-auto">
        {item.map((items, index) => (
            <div className="flex gap-10 rounded-xl ">
                <div className="text-4xl text-white rounded-lg bg-purple-500 h-12">{items.image}</div>
                <div className="flex flex-col">
                    <div className="mb-4 font-bold text-3xl">{items.title}</div>
                    <div className="text-gray-800">{items.description}</div>
                </div>
            </div>
        ))}
    </div>)
}