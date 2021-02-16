import styled from "styled-components"

export const ProjectsContainer = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 2em;
	margin-bottom: 30px;
	@media screen and (max-width: 789px) {
		min-width: 90%;
	} ;
`
export const PHeaderW = styled.div`
	background: rgba(255, 94, 2, 1);
	height: 70px;
	display: flex;
	margin-top: 20px;
/* 	box-shadow: 0 0 15px 5px, inset 0 0 10px 2px white;
 */
	place-items: center;
`
export const PHeader = styled.h1`
	padding: 2rem;
	font-size: 2.5rem;
	filter: drop-shadow(0 1px 1px white);
`
