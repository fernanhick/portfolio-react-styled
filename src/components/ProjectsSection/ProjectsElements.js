import styled from "styled-components"

export const ProjectsContainer = styled.section`
	min-height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 1.7em;
	margin-bottom: 30px;
	align-items: center;
	@media screen and (max-width: 789px) {
		min-width: 90%;
	} ;
`
export const PHeaderW = styled.div`
	background: rgba(255, 94, 2, 1);
	height: 70px;
	width: 100%;
	display: flex;
	margin-top: 20px;
	box-shadow: 0 0 15px 5px;

	align-items: center;
`
export const PHeader = styled.h1`
	padding: 2rem;
	font-size: 2.5rem;
	filter: drop-shadow(0 1px 1px white);
`
