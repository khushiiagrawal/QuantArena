import Header from "./header";
import MainPage, { AboutSection } from "./hero";
import About from "./aboutus";
import WhyChooseUs from "./whychooseus";
import { PartnerSection } from "./whychooseus";
import { TeamSection } from "./team";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow h-full">
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
