import { useEffect } from "react";

const AdsenseAd = ({ adClient, adSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
   <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client={adClient}
     data-ad-slot={adSlot}></ins>
  );
};

export default AdsenseAd;
