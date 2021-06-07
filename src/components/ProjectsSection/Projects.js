import React from "react"
import { projectsList } from "./data"
import {
	Decription,
	DescWrap,
	Detail,
	DevTools,
	Heading,
	ImgD,
	ImgM,
	Mark,
	ProjectCont,
	ProjectImg,
	PWrap,
	Topline,
} from "./ProjectsStyle"

const Projects = () => {
	return (
		<>
			{projectsList.map((data, key) => {
				console.log(key)

				return (
					<PWrap key={key}>
						<ProjectCont >
							<ProjectImg>
								<ImgD src={data.imgDesktop} alt={data.alt} />
							</ProjectImg>
							<Detail href={data.git}>
								{data.dev === "true" ? (
									<Mark style={{ background: "green" }}>Working</Mark>
								) : (
									<Mark style={{ background: "orange" }}>Developing</Mark>
								)}
								<Topline>{data.topLine}</Topline>
								<Heading>{data.headLine}</Heading>
								<DescWrap>
									<Decription>{data.description}</Decription>
									<DevTools>
										<p>{data.languages}</p>
									</DevTools>
								</DescWrap>
							</Detail>
						</ProjectCont>
					</PWrap>
				)
			})}
		</>
	)
}  
export default Projects
