import Header from "./header";
import Hero from "./hero";
import InfoSection from "./infosec";
import FeatureCard from "./infocard";
import Footer from "./footer";

export default function LandingPage() {
  const infoSections = [
    {
      title: "Our Vision",
      content: "Lorem ipsum dolor sit amet consectetur. Quis pulvinar leo dictum morbi id amet orci. Risus amet eget sed nec proin aliquet in adipiscing pretium. Sagittis vulputate interdum tristique volutpat sollicitudin et ac. Pellentesque facilisis pellent.",
      isImageLeft: true
    },
    {
      title: "Our Mission",
      content: "Lorem ipsum dolor sit amet consectetur. Quis pulvinar leo dictum morbi id amet orci. Risus amet eget sed nec proin aliquet in adipiscing pretium. Sagittis vulputate interdum tristique volutpat sollicitudin et ac. Pellentesque facilisis pellent.",
      isImageLeft: false
    },
    {
      title: "Our Expertise",
      content: "Lorem ipsum dolor sit amet consectetur. Quis pulvinar leo dictum morbi id amet orci. Risus amet eget sed nec proin aliquet in adipiscing pretium. Sagittis vulputate interdum tristique volutpat sollicitudin et ac. Pellentesque facilisis pellent.",
      isImageLeft: true
    }
  ];

  const features = [
    {
      title: "Expertise",
      description: "Lorem ipsum dolor sit amet consectetur. Quis pulvinar leo dictum morbi id amet orci. Risus amet eget sed nec proin aliquet in adipiscing pretium. Sagittis vulputate interdum tristique volutpat sollicitudin et ac. Pellentesque facilisis pellent.",
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/30a04ecdb75129549f914fef1bee170ec7233fe45500d4a390b884cb664f73cd?apiKey=49da03168f27461ca59f3dd580a07fb1&",
      hasCustomIcon: false
    },
    {
      title: "Tailored Solutions",
      description: "Lorem ipsum dolor sit amet consectetur. Quis pulvinar leo dictum morbi id amet orci. Risus amet eget sed nec proin aliquet in adipiscing pretium. Sagittis vulputate interdum tristique volutpat sollicitudin et ac. Pellentesque facilisis pellent.",
      hasCustomIcon: true
    },
    {
      title: "Advanced Analytics",
      description: "Lorem ipsum dolor sit amet consectetur. Quis pulvinar leo dictum morbi id amet orci. Risus amet eget sed nec proin aliquet in adipiscing pretium. Sagittis vulputate interdum tristique volutpat sollicitudin et ac. Pellentesque facilisis pellent.",
      hasCustomIcon: true
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col pb-8 w-full bg-black max-md:max-w-full">
        <Header />
        <Hero />
      </div>
      
      <div className="flex flex-col items-start self-end mt-36 w-full max-w-[1811px] max-md:mt-10 max-md:max-w-full">
        {infoSections.map((section, index) => (
          <div key={index} className="mt-24 w-full max-w-[1579px] max-md:mt-10 max-md:max-w-full">
            <InfoSection {...section} />
          </div>
        ))}
      </div>

      <div className="px-12 py-14 mt-40 w-full bg-violet-500 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-14 pr-7 pb-64 pl-10 w-full text-white bg-violet-500 min-h-[673px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
              <h2 className="max-w-full text-4xl font-bold w-[417px]">
                Why Choosing Us?
              </h2>
              <p className="mt-2.5 text-xl leading-8">
                Lorem ipsum dolor sit amet consectetur. Quis pulvinar leo dictum morbi id amet orci. Risus amet eget sed nec proin aliquet in adipiscing pretium. Sagittis vulputate interdum tristique volutpat sollicitudin et ac. Pellentesque facilisis pellent.
              </p>
            </div>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}