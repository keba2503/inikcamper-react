import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Contact } from "../components/contact";

import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


export function Contacto() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>

<Navigation data={landingPageData.Contact}/> 
     
 
      <Contact data={landingPageData.Contact} />

    </div>
  );
}