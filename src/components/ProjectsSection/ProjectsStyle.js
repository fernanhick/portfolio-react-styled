import styled from "styled-components"

export const PWrap = styled.div`
	margin: 20px;
	height: 100%;
	box-shadow: 0px 0px 15px 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	background: rgb(255, 124, 42);
	background: linear-gradient(
		158deg,
		rgba(255, 94, 2, 1) 23%,
		rgba(233, 213, 47, 1) 38%,
		rgba(72, 212, 58, 1) 41%,
		rgba(20, 241, 230, 1) 55%,
		rgba(6, 77, 180, 1) 68%,
		rgba(98, 5, 168, 1) 80%
	);
`
export const ProjectCont = styled.div`
	position: relative;
	height: 100%;
	max-width: 300px;

	border-radius: 10px;
	justify-content: center;
	align-items: center;
	margin: 5px;
	cursor: pointer;
	background: rgba(255, 255, 255, 0.7);
	display: flex;
	flex-wrap: wrap;
	flex: 1 1 1px;
	flex-direction: row;
	@media screen and (max-width: 789px) {
		width: 90%;
		min-width: 90%;
	}
`

export const Mark = styled.div`
	position: relative;
	height: 2em;
	width: 210px;
	font-size: 1.1rem;
	color: white;
	top: 1.5em;
	left: -3.5em;
	text-align: center;
	padding-top: 0.3rem;
	box-shadow: 0px 7px 15px black;
	transform: rotate(-45deg);
`

export const ProjectImg = styled.div`
	width: 400px;
	min-width: 180px;
	min-height: 210px;

	display: flex;

	justify-content: space-between;
	flex: 1 1 1px;
	margin: 2rem;
`
export const ImgM = styled.img`
	width: 40%;
	min-height: 30%;

	max-height: 40%;
	box-shadow: 8px 8px 15px;
	transform: scale(0.7) translateX(-150%) translateY(50px);
`
export const ImgD = styled.img`
	width: 100%;
	height: 100%;
	max-height: 50%;
	box-shadow: 8px 8px 15px;
	flex-basis: 25%;
`
export const Detail = styled.a`
	background: rgba(0, 0, 0, 0.8);
	flex: 1 0 1px;
	display: flex;
	flex-direction: column;
	min-width: 70%;
	/*   height: 100%;
 */
	height: 28em;
	text-decoration: none;
	alig-items: center;
	justify-content: space-beteween;
	border-radius: 0px 0px 10px 10px;
	overflow: hidden;
	@media screen and (max-width: 789px) {
	} ;
`
export const Topline = styled.h2`
  font-size: 1rem;
  color: grey;
  text-align: right;
  background: rgba(0, 0, 0, 0.3);
  padding-right 0.8rem;
  padding-left:20%;
`
export const Heading = styled.h1`
	font-size: 2rem;
	color: #d6d6d6;
	margin: auto;
	height: 3rem;
	filter: drop-shadow(1px -3px 1px black);
`
export const Decription = styled.p`
	color: #bdbdbd;
	margin: 1rem 0.8rem;
	min-width: 70%;
	flex-basis: 70%;
`
export const DescWrap = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	flex: 1 1 1px;
`
export const DevTools = styled.ul`
	margin: 0;
	padding: 0.2rem;
	background: rgba(255, 255, 255, 0.7);
	flex-basis: 25%;
	border-radius: 0px 0px 10px 10px;
`
