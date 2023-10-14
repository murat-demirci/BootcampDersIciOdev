import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import ImageLocation from "./components/ImageLocation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <Project />
        <About />
        <Contact />
        <ImageLocation />
      </div>
      <Footer />
    </>
  );
}

export default App;
