
import MainPage, { AboutSection } from "./hero";
import About from "./aboutus";
import WhyChooseUs from "./whychooseus";
import { PartnerSection } from "./whychooseus";
import { TeamSection } from "./team";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-white">
      {/* Header Section */}
    

      {/* Main Content */}
      <main className="flex-grow h-screen">
        <MainPage />
        <AboutSection />
        <About/>
        <WhyChooseUs/>
        <PartnerSection/>
        <TeamSection/>
        <Footer/>

      </main>
      

      {/* Footer */}
    </div>
  );
}
