import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/footer";
import { NavBar } from "@/components/layout/NavBar";
import EVServicesSection from "@/components/layout/services";
import { Features } from "@/components/layout/features";
import { FAQ } from "@/components/layout/FAQ";
import { FeaturesCarousel } from "@/components/layout/features-carousel";
import { MobileApp } from "@/components/layout/mobile-app";
import { Contact } from "@/components/layout/contact";
import { Testimonial } from "@/components/layout/testimonial";

export default function Home() {
  return (

    <div className="min-h-screen  flex flex-col">
      <NavBar />

      <main className="min-h-screen flex flex-col">
        <Hero/>
        <Features/>
        <EVServicesSection/>
        <FAQ/>
        <FeaturesCarousel/>
        <MobileApp />
        <Testimonial/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}