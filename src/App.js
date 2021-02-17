import "./App.css"
import Footer from "./components/footer"
import HeroSection from "./components/herosection"
import Navbar from "./components/navbar"
import ProjectsSection from "./components/ProjectsSection/Index"
import { BrowserRouter as Router, HashRouter } from "react-router-dom"

function App() {
	return (
		<>
			<HashRouter basename="/">
				<Router>
					<Navbar />
					<HeroSection />
					<ProjectsSection />
					<Footer />
				</Router>
			</HashRouter>
		</>
	)
}

export default App
