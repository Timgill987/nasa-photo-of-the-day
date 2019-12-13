import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import GalaxyCard from "./card";
function App() {
  const [appStuff, setAppStuff] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=R2hhFJdU7TuiecabWphEVkjhUWYwHLUXUaML2bvu`
      )
      .then(response => {
        console.log(response.data);
        setAppStuff(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  console.log(appStuff);
  return (
    <div className="App">
      <GalaxyCard
        
        title={appStuff.title}
        explanation={appStuff.explanation}
        image={appStuff.url}
        date={appStuff.date}
      />

      
    </div>
  );
}

export default App;

/* date: "2019-12-11"
explanation: "What has this supernova left behind?  As little as 2,000 years ago, light from a massive stellar explosion in the Large Magellanic Cloud (LMC) first reached planet Earth. The LMC is a close galactic neighbor of our Milky Way Galaxy and the rampaging explosion front is now seen moving out - destroying or displacing ambient gas clouds while leaving behind relatively dense knots of gas and dust.  What remains is one of the largest supernova remnants in the LMC: N63A.  Many of the surviving dense knots have been themselves compressed and may further contract to form new stars.  Some of the resulting stars may then explode in a supernova, continuing the cycle.  Featured here is a combined image of N63A in the X-ray from the Chandra Space Telescope and in visible light by Hubble.  The prominent knot of gas and dust on the upper right -- informally dubbed the Firefox -- is very bright in visible light, while the larger supernova remnant shines most brightly in X-rays.  N63A spans over 25 light years and lies about 150,000 light years away toward the southern constellation of Dorado."
hdurl: "https://apod.nasa.gov/apod/image/1912/N63A_HubbleChandraSchmidt_1019.jpg"
media_type: "image"
service_version: "v1"
title: "N63A: Supernova Remnant in Visible and X-ray"
url: "https://apod.nasa.gov/apod/image/1912/N63A_HubbleChandraSchmidt_960.jpg"*/
