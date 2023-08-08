import Navbar from "../Navbar";
import Footer from "../Footer";

const Photozone = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center">
        <img src="picture1.jpeg" alt="" />
        <img src="picture2.jpeg" alt="" />
        <img src="picture3.jpeg" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Photozone;