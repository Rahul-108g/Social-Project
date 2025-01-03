import "./App.css";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import PostListrovider from "../Component/Store/post-list-store";
import { Outlet } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    aos.init({
      once: true,
    });
  }, []);
  return (
    <PostListrovider>
      <div className="con1">
        <div className="content">
          <Navbar />

          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListrovider>
  );
}

export default App;
