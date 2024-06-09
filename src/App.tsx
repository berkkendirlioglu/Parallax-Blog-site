import Navbar from "./components/Navbar/Navigation";
import Hero from "./components/Header/Hero";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Marquee from "./components/marquees/Marquee";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Videos from "./components/Videos/Videos";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Marquee text={"About"}/>
      <About/>
      <Marquee text={"Blogs"}/>
      <Blogs/>
      <Marquee text={"Videos"}/>
      <Videos/>
      <Footer/>
    </>
  )
}

export default App
