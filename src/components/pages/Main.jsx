import Carousel from "../Carousel";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MainTexts from "../MainTexts";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="h-fit">
      <Navbar />
      <Carousel images={['/banner.jpeg']} />
      <Link to='https://www.nhis.or.kr/static/alim/paper/oldpaper/202203/sub/01.html' className="bg-stone-800 h-60 w-60 mx-auto rounded-full font-bold text-white text-4xl flex items-center my-3 justify-center">
        <img src="/main_circle.png" alt="" />
      </Link>
      <MainTexts />
      <Footer />
    </div>
  );
}

export default Main;