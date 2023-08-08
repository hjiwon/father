import { useEffect, useRef } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const WayCome = () => {
  const container = useRef(null);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const options = {
        center: new window.kakao.maps.LatLng(37.222528, 126.9855495),
        level: 3
      };
      const map = new window.kakao.maps.Map(container.current, options);
      const markerPosition = new window.kakao.maps.LatLng(37.222528, 126.9855495);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);
    }, 800); // 2초 (2000ms) 지연

    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트될 때 타임아웃 클리어
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Navbar />
      <div id='map' ref={container} className="w-5/6 h-5/6" />
      <Footer />
    </div>
  )
}

export default WayCome;
