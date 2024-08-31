import CommitmentHighlight from "../components/CommitmentHighlight";
import OurStory from "../components/OurStory";
import WhyUs from "../components/WhyUs";

export default function () {

    return (
        <div className="h-screen">
            <div className="bg-gradient-to-r from-[#f06eda] to-[#f38ce2] text-white">



                <div className="flex flex-col items-center gap-y-4 relative top-[50px] min-h-[400px] ">
                    <div className="text-2xl font-semibold">About Us</div>
                    <div className="text-7xl w-8/12 font-bold">Elevating Your Brand with</div>
                    <div className="text-7xl font-bold"> Digital Excellence</div>
                    <div className="flex flex-col items-center w-7/12 mt-4">
                        <div className="text-sm ">Elevating your brand with digital excellence means using innovative strategies to enhance your online presence. We focus on quality </div>
                        <div className="text-sm w-8/12 ">content and user experience to help you stand out and connect with your audience.</div>
                    </div>
                </div>
            </div>
            {/* meet digicap */}
            <div className="flex w-[80%] mx-auto relative  top-20 bg-gradient-to-r from-[#e1fcfd] to-[#b2ebf2] p-8">
                <div className="w-[50%] bg-transparent  flex flex-col text-5xl font-bold gap-y-4">
                    <div>Meet Digicap</div>
                    <div>Where Innovation</div>
                    <div>Meets Impact</div>
                </div>
                <div className="w-[50%] bg-transparent flex items-center justify-center">Discover how Digicap harnesses innovative strategies to create meaningful impacts that drive success and transformation for your brand.</div>
            </div>
            {/* whyus div */}
            <div className="relative top-40">
                <div className="flex flex-col gap-y-4 mb-4">
                    <div className="flex justify-center text-5xl font-bold ">Why Choose Our Digital </div>
                    <div className="flex justify-center text-5xl font-bold "> Marketing Expertise?</div>
                </div>
                <WhyUs />
                {/* our story */}
                <OurStory />
                {/* commitment */}
                <CommitmentHighlight />
            </div>
            
        </div>

    )
}
// f06fda