import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Add from "./pages/Add";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/fav" element={<Favorite />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
