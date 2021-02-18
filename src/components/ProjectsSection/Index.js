import React from "react"
import Projects from "./Projects"
import { PHeader, PHeaderW, ProjectsContainer } from "./ProjectsElements"


const ProjectsSection = () => {
	return (
		<>
			<ProjectsContainer id="projects">
				<PHeaderW>
					<PHeader>Projects</PHeader>
				</PHeaderW>
				<Projects />
			</ProjectsContainer>
		</>
	)
}

export default ProjectsSection
