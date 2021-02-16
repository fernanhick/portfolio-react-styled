import React from "react"
import Projects from "./Projects"
import { PHeader, PHeaderW, ProjectsContainer } from "./ProjectsElements"
import { PWrap } from "./ProjectsStyle"

const ProjectsSection = () => {
	return (
		<>
			{" "}
			<PHeaderW>
				<PHeader>Projects</PHeader>
			</PHeaderW>
				<ProjectsContainer id="projects">
					<Projects />
				</ProjectsContainer>
		</>
	)
}

export default ProjectsSection
