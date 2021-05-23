import React, { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
import { About } from "../../components/LandingPage/about";
import { Contact } from "../../components/LandingPage/contact";
import { Features } from "../../components/LandingPage/features";
import { Gallery } from "../../components/LandingPage/gallery";
import { Header } from "../../components/LandingPage/header";
import { Navigation } from "../../components/LandingPage/navigation";
import { Services } from "../../components/LandingPage/services";
import { Team } from "../../components/LandingPage/Team";
// import { Testimonials } from "../../components/LandingPage/testimonials";
import JsonData from "../../data/dataLandingPage.json";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default LandingPage;
