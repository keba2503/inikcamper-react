import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


export function QuienesSomos() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>

      <Navigation />
      <About data={landingPageData.About} />  
      <Contact data={landingPageData.Contact} />

    </div>
  );
}


