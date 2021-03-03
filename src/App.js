import "./App.css"
import Footer from "./components/footer"
import HeroSection from "./components/herosection"
import Navbar from "./components/navbar"
import ProjectsSection from "./components/ProjectsSection/Index"
import { BrowserRouter as Router } from "react-router-dom"
import ContactSection from "./components/contactsection"

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<HeroSection />
				<ProjectsSection />
				<ContactSection />
				<Footer />
			</Router>
		</>
	)
}

export default App
