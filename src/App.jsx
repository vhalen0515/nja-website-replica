import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Router>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}
