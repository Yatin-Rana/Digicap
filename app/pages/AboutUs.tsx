import CommitmentHighlight from "../components/CommitmentHighlight";
import OurStory from "../components/OurStory";
import WhyUs from "../components/WhyUs";

export default function AboutUs() {
    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-r from-[#f06eda] to-[#f38ce2] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-y-4 max-w-4xl mx-auto">
                    <h1 className="text-2xl font-semibold mb-2">About Us</h1>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center">
                        Elevating Your Brand with Digital Excellence
                    </h2>
                    <p className="text-sm sm:text-base text-center mt-4 max-w-2xl">
                        Elevating your brand with digital excellence means using innovative strategies to enhance your online presence. We focus on quality content and user experience to help you stand out and connect with your audience.
                    </p>
                </div>
            </div>

            {/* meet digicap */}
            <div className="w-full max-w-5xl mx-auto mt-12 bg-gradient-to-r from-[#e1fcfd] to-[#b2ebf2] p-6 sm:p-8 rounded-lg">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2 flex flex-col text-3xl sm:text-4xl lg:text-5xl font-bold gap-y-2">
                        <div>Meet Digicap</div>
                        <div>Where Innovation</div>
                        <div>Meets Impact</div>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center text-base sm:text-lg">
                        Discover how Digicap harnesses innovative strategies to create meaningful impacts that drive success and transformation for your brand.
                    </div>
                </div>
            </div>

            {/* whyus div */}
            <div className="mt-20 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-y-2 mb-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
                        Why Choose Our Digital Marketing Expertise?
                    </h2>
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
