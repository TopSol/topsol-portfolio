import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
// import Home from "../components/Home/Home";
import Feature from "../components/Feature/Feature";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonial from "../components/Testimonial/Testimonial";
import ContactUs from "../components/ContactUs/ContactUs";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Footer from "../components/Footer/Footer";

export default function Index() {
  return (
    <div
      className="culmn"
      data-spy="scroll"
      data-target=".navbar"
      data-offset="200"
    >
      <Navbar />
      <Header />
      <Feature />
      <About />
      <Services />
      <ChooseUs />
      <Portfolio />
      {/* <Testimonial />
      <ContactUs />
      <GoogleMap />
      <Footer /> */}
    </div>
  );
}
