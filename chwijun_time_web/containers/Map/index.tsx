import React, { useEffect } from "react";
import KakaomapComponent from "components/KakaoMap";

const Map: React.FC = () => {
  const kakaoMap = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (kakaoMap && kakaoMap.current) {
      var geocoder = new (window as any).daum.maps.services.Geocoder();
      geocoder.addressSearch('광주광역시 북구 서강로 150-1', function(result, status) {
        if (status === (window as any).daum.maps.services.Status.OK) {
          var coords = new (window as any).daum.maps.LatLng(result[0].y, result[0].x);

          const options = {
            center: coords,
            level: 2,
          };

          const map = new (window as any).daum.maps.Map(kakaoMap.current, options);
          var marker = new (window as any).daum.maps.Marker({
            map: map,
            position: coords
          });
          map.setCenter(coords);
        }
      });
    }
  }, [kakaoMap]);
  return <KakaomapComponent ref={kakaoMap} />;
};

export default Map;