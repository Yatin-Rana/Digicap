import Image from "next/image"

export default function TopContainer() {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-center bg-[#f3f5ea]">
            {/* left side container */}
            <div className="w-full lg:w-1/2 px-4 lg:px-0">
                <div className="lg:ml-32 mt-8 p-4 lg:p-8">
                    <h1 className="text-4xl lg:text-7xl font-semibold">Digital Marketing</h1>
                    <p className="mt-6 lg:mt-14 text-gray-500 text-lg lg:text-xl">
                        Extract real business value from social media.
                        Ensuring the best return on investment for your
                        bespoke SEO campaign requirement.
                    </p>
                    <button className="rounded-2xl w-32 h-8 text-white bg-black mt-4">Contact Today</button>
                </div>
            </div>
            {/* right side container */}
            <div className="hidden lg:flex w-full lg:w-1/2">
                <div>
                    <Image 
                        width={500} 
                        height={500} 
                        alt="smiling" 
                        className="w-[250px] h-[200px] ml-8 mt-8 rounded-xl" 
                        src="https://img.freepik.com/free-photo/smiling-young-pretty-woman-standing-isolated_171337-1998.jpg?t=st=1725037780~exp=1725038380~hmac=565b02c25fd8c33a0de0d76aee490760ecf8434de650b4c8f3318f7bd23763fc" 
                    />
                </div>
                <div className="ml-8 flex">
                    <Image 
                        width={500} 
                        height={500} 
                        alt="young" 
                        className="absolute top-52 right-[200px] w-[250px] h-[200px] ml-8 mt-8 rounded-xl" 
                        src="https://img.freepik.com/free-photo/young-painter-with-empty-palette-brush-thinking-about-work_114579-85868.jpg?t=st=1725038114~exp=1725041714~hmac=e3b49c3c92f8591fe5fec04e0b84e77325a013e8be46f4b61651e04446dc9866&w=996" 
                    />
                </div>
            </div>
        </div>
    )
}
