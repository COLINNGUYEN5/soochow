import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Navbar from "./components/NavBar.tsx";
import Waishuangxi from "./pages/Sites/Waishuangxi.tsx";
import National from "./pages/Sites/National.tsx";
import Chiang from "./pages/Sites/Chiang.tsx";
import Vlogs from "./pages/Vlogs.tsx";
import Shilin from "./pages/Sites/Shilin.tsx";

function App() {
    return (
        <div className="overflow-hidden flex flex-col h-screen">
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/vlogs" element={<Vlogs />} />
                    <Route path="/sites/waishuangxi" element={<Waishuangxi />} />
                    <Route path="/sites/national" element={<National />} />
                    <Route path="/sites/chiang" element={<Chiang />} />
                    <Route path="/sites/shilin" element={<Shilin />} />
                </Routes>
        </div>
    );
}


export default App
