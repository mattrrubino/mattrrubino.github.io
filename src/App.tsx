import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./views/Hero";
import About from "./views/About";
import Experience from "./views/Experience";
import Projects from "./views/Projects";
import Publications from "./views/Publications";
import Footer from "./views/Footer";
import Pokemix from "./views/projects/Pokemix";
import COVID from "./views/projects/COVID";
import Christmas from "./views/projects/Christmas";
import useActiveSection from "./hooks/useActiveSection";

const SECTION_IDS = ["home", "about", "experience", "projects", "publications"];

function MainPage() {
    const activeId = useActiveSection(SECTION_IDS);

    return (
        <div className="bg-bg text-text font-sans min-h-screen">
            <Nav activeId={activeId} />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Publications />
            <Footer />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/projects/pokemix" element={<Pokemix />} />
                <Route path="/projects/covid" element={<COVID />} />
                <Route path="/projects/christmas" element={<Christmas />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
