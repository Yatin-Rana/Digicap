import Image from "next/image"

export default function TopContainer() {
    return (<div className="flex w-screen  justify-center bg-[#f3f5ea]">
        {/* left side container */}
        <div className="w-[50%] ">

            <div className="ml-32 mt-8 p-8 ">

                <div className="text-7xl w-8 font-semibold">Digital Marketing</div>
                <div className="mt-14 text-gray-500 text-xl">Extract real business value from social media.
                    Ensuring the best return on investment for your
                    bespoke SEO campaign requirement.</div>
                <button className="rounded-2xl w-32 h-8 text-white bg-black mt-4">Contact Today</button>
            </div>

        </div>
        {/* right side container */}
        <div className="flex w-[50%] ">
            <div >
                <Image alt="smiling"  className="w-[250px] h-[200px] ml-8 mt-8 rounded-xl" src="https://img.freepik.com/free-photo/smiling-young-pretty-woman-standing-isolated_171337-1998.jpg?t=st=1725037780~exp=1725038380~hmac=565b02c25fd8c33a0de0d76aee490760ecf8434de650b4c8f3318f7bd23763fc" />
            </div>
            <div className=" ml-8 flex ">
                <Image alt="young" className=" absolute  top-52 right-[200px] w-[250px] h-[200px] ml-8 mt-8 rounded-xl" src="https://img.freepik.com/free-photo/young-painter-with-empty-palette-brush-thinking-about-work_114579-85868.jpg?t=st=1725038114~exp=1725041714~hmac=e3b49c3c92f8591fe5fec04e0b84e77325a013e8be46f4b61651e04446dc9866&w=996" />
            </div>
        </div>
        
    </div>)
}/* div.elementor-widget-container */

/* Auto layout */
// f3f5ea
// b8e3ff