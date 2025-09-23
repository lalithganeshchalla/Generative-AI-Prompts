// import React, { useEffect } from 'react';

// const AdsenseAd = ({ adClient, adSlot }) => {
//   useEffect(() => {
//     // This function will attempt to push an ad
//     const loadAd = () => {
//       if (window.adsbygoogle && window.adsbygoogle.loaded) {
//         // If the adsbygoogle array is available and loaded, push the ad
//         try {
//           window.adsbygoogle.push({});
//           console.log("Ad pushed successfully.");
//         } catch (e) {
//           console.error("AdSense push error:", e);
//         }
//       } else {
//         // If not, wait a bit and try again.
//         console.log("AdSense script not yet loaded, retrying...");
//         setTimeout(loadAd, 500);
//       }
//     };

//     // Initial call to load the ad
//     loadAd();
//   }, [adClient, adSlot]); // Re-run effect if adClient or adSlot changes

//   return (
//     <ins 
//       className="adsbygoogle"
//       style={{ display: "block" }}
//       data-ad-format="fluid"
//       data-ad-layout-key="-fb+5w+4e-db+86"
//       data-ad-client={adClient}
//       data-ad-slot={adSlot}
//       data-ad-test="on" // This is for testing purposes only. Remove in production.
//     ></ins>
//   );
// };

// export default AdsenseAd;
import { useEffect } from "react";

const AdsenseAd = ({ adClient, adSlot }) => {
  useEffect(() => {
    try {
      // This line pushes a new ad. It should only run once.
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error(e);
    }
  }, []); // The empty array here is crucial.

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="fluid"
      data-ad-layout-key="-fb+5w+4e-db+86"
      data-ad-client={adClient}
      data-ad-slot={adSlot}
    ></ins>
  );
};

export default AdsenseAd;