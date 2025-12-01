import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./providers/AppProvider";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Faqs from "./components/Faqs";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
