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
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-5889684785099263"
     data-ad-slot="5880516949"></ins>
  );
};

export default AdsenseAd;
