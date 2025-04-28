import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carousel from "./pages/Carousel"
import About from "./pages/About";
import Location from "./pages/Location";
import Navbar from "./components/NavBar.tsx";
import Waishuangxi from "./pages/Sites/Waishuangxi.tsx";
import National from "./pages/Sites/National.tsx";
import Collection from "./pages/Collection.tsx";
import Shilin from "./pages/Sites/Shilin.tsx";
import Soka from "./pages/Sites/Soka.tsx";
import Shuangxi from "./pages/Sites/Shuangxi.tsx";
import Fuyu from "./pages/Sites/Fuyu.tsx";
import Zhishanyan from "./pages/Sites/Zhishanyan.tsx";
import Soochow from "./pages/Sites/Soochow.tsx";
import Aboriginal from "./pages/Sites/Aboriginal.tsx";
import Miscellaneous from "./pages/Miscellaneous.tsx";


function App() {
    return (
        <div className="overflow-hidden flex flex-col h-screen">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carousel" element={<Carousel />} />
                <Route path="/about" element={<About />} />
                <Route path="/sites" element={<Location />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/sites/waishuangxi" element={<Waishuangxi />} />
                <Route path="/sites/national" element={<National />} />
                <Route path="/sites/shilin" element={<Shilin />} />
                <Route path="/sites/soka" element={<Soka />} />
                <Route path="/sites/shuangxi" element={<Shuangxi />} />
                <Route path="/sites/fuyu" element={<Fuyu />} />
                <Route path="/sites/zhishanyan" element={<Zhishanyan />} />
                <Route path="/sites/soochow" element={<Soochow />} />
                <Route path="/sites/aboriginal" element={<Aboriginal />} />
                <Route path="/sites/miscellaneous" element={<Miscellaneous />} />
            </Routes>
        </div>
    );
}


export default App
