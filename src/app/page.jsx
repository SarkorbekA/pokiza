import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Cultury from "@/components/Cultury/Cultury";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="wrapper-top">
        <Header />

        <Banner />
        <Cultury />
        <About />
      </div>
      <Footer />
    </div>
  );
}
