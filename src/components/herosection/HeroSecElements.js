import styled from "styled-components"

export const HeroContainer = styled.section`
/* 	padding-top: 7em;
	padding-bottom: 3em; */
	padding: 6em 1em 1em;
/* 	height: 550px;
 */	/*background: rgb(255, 124, 42);
	 background: linear-gradient(
		158deg,
		rgba(255, 94, 2, 1) 23%,
		rgba(233, 213, 47, 1) 68%,
	/* 	rgba(72, 212, 58, 1) 41%,
		rgba(20, 241, 230, 1) 55%,
		rgba(6, 77, 180, 1) 68%, */
		rgba(98, 5, 168, 1) 90%
	); */
	display: flex;
/* 	justify-content: center;
	align-items: center; */
`
export const HeroWrapper = styled.div`
	max-width: 800px;
	cursor: alias;
	color: white;
	padding: 2em;
	margin: 10px auto;
	display: flex;
	flex-wrap: wrap;
	background-color: rgba(0, 0, 0, 0.1);
	z-index: 1;
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 0 0 15px 1px, inset 0 0 10px 2px black;
	align-items: center;
	justify-content: space-between;
`
export const HeroPic = styled.nav`
	height: 180px;
	margin: 0;
	padding: 0;
	border-radius: 0 0 10px;
	box-shadow: 0 0 5px 2px black;
	overflow: hidden;
	margin-top: 10px;
`
export const HeroHeader = styled.h2`
	margin: 1rem auto;
	filter: drop-shadow(1px 3.5px 1px black);
	min-width: 100%;
	text-align: center;
	font-size: 2.5rem;
`
export const HeroTitle = styled.h1`
	font-size: 2rem;
	min-width: 100%;
	filter: drop-shadow(1px 3.5px 1px black);

	margin-bottom: 1.5em;
`
export const HeroDesc = styled.p`
	font-size: 1.2rem;
	filter: drop-shadow(0.7px 2.3px 1px black);
	max-width: 100%;
	min-width: 60%;
	margin: 0;
`
