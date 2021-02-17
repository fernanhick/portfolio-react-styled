import "./App.css"
import Footer from "./components/footer"
import HeroSection from "./components/herosection"
import Navbar from "./components/navbar"
import ProjectsSection from "./components/ProjectsSection/Index"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<HeroSection />
				<ProjectsSection />
				<Footer />
			</Router>
		</>
	)
}

export default App
