import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";

import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


export function Equipo() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>

      <Navigation />
     
      <Team data={landingPageData.Team} />
  
      <Contact data={landingPageData.Contact} />

    </div>
  );
}

