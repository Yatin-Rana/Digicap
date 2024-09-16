import Image from "next/image"

export default function Experience() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full p-4 sm:p-8 bg-[#e6f7ff]">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <Image
                    className="w-full max-w-md mx-auto lg:ml-8 rounded-xl"
                    src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg"
                    alt="A digital workspace with a computer and various digital tools"
                    width={500}
                    height={500}
                    layout="responsive"
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-center lg:text-left">Outstanding Digital Experience</h2>
                <p className="text-lg sm:text-xl text-gray-800 text-center lg:text-left">
                    At Digicap, we specialize in delivering outstanding digital experiences that engage and inspire. We ensure seamless user interactions across all digital platforms. By focusing on intuitive navigation and compelling content, we create memorable experiences that drive results and elevate your brand&apos;s online presence.
                </p>
            </div>
        </div>
    );
}
