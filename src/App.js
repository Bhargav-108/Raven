import "./App.css";
import Header from "./Components/Header/Header";
import Counter from "./Components/Project/Counter";
import MoreWork from "./Components/Project/MoreWork";
import Project from "./Components/Project/Project";
import Services from "./Components/Services/Services";
import Slider from "./Components/Slider.js/Slider";
import { BrowserRouter as Router } from "react-router-dom";
import Testimonial from "./Components/Testimonial/Testimonial";
import ChooseUs from "./Components/ChooseUs/ChooseUs";
import Blog from "./Components/Blog/Blog";
import ContactUs from "./Components/ContacUs/ContactUs";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Slider />
        <Services />
        <Project />
        <Counter />
        <MoreWork />
        <Testimonial />
        <ChooseUs />
        <ContactUs />
        <Blog />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
