import styled from "styled-components"

export const HeroContainer = styled.section`
/* 	height: 100vh;
 */	background: rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
`
export const HeroWrapper = styled.div`
	padding: 1em;
	display: flex;
	flex-direction: column;
	width: 80%;
	min-height: 400px;
	z-index: 1;
	overflow: hidden;
	::after {
		content: "";
		position: relative;
		height: 60px;
		background-color: cyan;
		z-index: -10;
		transform: rotate(20deg) scale(7);
		top: 60px;
		left: -50px;
		width: 100vw;
		transition: transform 2s, z-index 3s, width 2s, height 2s, background 1.1s;
	}
	::before {
		content: "";
		position: relative;
		height: 60px;
		background-color: #f00;
		z-index: -10;
		width: 200%;
		transform: rotate(20deg) scale(3);
		top: 20px;
		transition: z-index 3s, width 2s, height 2s, background 1.1s;
	}
	&:hover::before {
		background: rgba(255, 15, 255, 0.1);
	}
	&:hover::after {
		transform: scale(2);
	}
    &:hover::HeroHeader {
		transform: scale(2);
	}
`
export const HeroHeader = styled.h2`
	font-size: 2.2rem;
`
export const HeroTitle = styled.h1`
	font-size: 1.8rem;
`
export const HeroDesc = styled.p`
	font-size: 1.2rem;
`
