import styled from "styled-components"

export const HeroContainer = styled.section`
	padding-top: 5em;
	padding-bottom: 2em;
	height: 400px;
	background: rgb(255, 124, 42);
	background: linear-gradient(
		158deg,
		rgba(255, 124, 42, 1) 13%,
		rgba(233, 213, 47, 1) 28%,
		rgba(72, 212, 58, 1) 41%,
		rgba(20, 241, 230, 1) 55%,
		rgba(6, 77, 180, 1) 68%,
		rgba(98, 5, 168, 1) 80%
	);
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 10px 5px;
`
export const HeroWrapper = styled.div`
	color: white;
	padding: 1em;
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	background-color: rgba(0, 0, 0, 0.1);
	z-index: 1;
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 0 0 15px 1px, inset 0 0 10px 2px black;
	align-items: center;
	justify-content: space-between;
	&::before {
		position: absolute;
		content: "";
		width: 0px;
		height: 0px;
		border-top: 20px solid darkorange;
		border-right: 20px solid transparent;
		border-bottom: 20px solid transparent;
		border-left: 20px solid transparent;
		top: 512px;
		right: 47.5%;
		filter: drop-shadow(0 8px 3px black);
	}
`
export const HeroPic = styled.nav`
	height: 90px;
	margin: 0;
	padding: 0;
	border-radius: 0 0 10px;
	box-shadow: 0 0 5px 2px black;
`
export const HeroHeader = styled.h2`
	margin: 0;
	filter: drop-shadow(0.7px 2.3px 1px black);
	min-width: 100%;

	font-size: 2.2rem;
`
export const HeroTitle = styled.h1`
	font-size: 1.8rem;
	min-width: 100%;

	filter: drop-shadow(0.7px 2.3px 1px black);

	margin-bottom: 1.5em;
`
export const HeroDesc = styled.p`
	font-size: 1.2rem;
	filter: drop-shadow(0.7px 2.3px 1px black);
	max-width: 50%;
	min-width: 60%;

	margin: 0;
`
