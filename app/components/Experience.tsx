import Image from "next/image"

export default function Experience() {
    return (
        <div className="flex items-center justify-center w-full p-8 h-full bg-[#e6f7ff]">
            <div className="w-[50%]">
                <Image
                    className="w-[70%] h-[80%] ml-8 rounded-xl"
                    src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg"
                    alt="A digital workspace with a computer and various digital tools"
                />
            </div>
            <div className="w-[50%] flex flex-col">
                <p className="text-4xl w-96 font-semibold">Outstanding Digital Experience</p>
                <p className="text-2xl mt-2 text-gray-800">
                    At Digicap, we specialize in delivering outstanding digital experiences that engage and inspire. We ensure seamless user interactions across all digital platforms. By focusing on intuitive navigation and compelling content, we create memorable experiences that drive results and elevate your brand&apos;s online presence.
                </p>
            </div>
        </div>
    );
}
