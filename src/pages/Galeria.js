import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Gallery } from "../components/gallery";
import { Contact } from "../components/contact";

import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


export function Galeria() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>

      <Navigation />
     
      <Gallery data={landingPageData.Gallery} />
  
      <Contact data={landingPageData.Contact} />

    </div>
  );
}


