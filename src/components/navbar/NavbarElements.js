import styled from "styled-components"
import { Link as LinkS } from "react-scroll"
import { Link as LinkR } from "react-router-dom"
import { Github } from "@styled-icons/entypo-social/Github"
export const NavbarContainer = styled.nav`
	position: fixed;
	color: white;
	width: 100%;
	min-height: 3em;
	backdrop-filter: blur(10px) grayscale(0.2) opacity(0.9);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	z-index: 999;
	box-shadow: 0 0 15px;
	margin-bottom: 10px;
	box-shadow: 0 0 15px 1px, inset 0 -5px 5px -3px black;

`

export const GitLogo = styled(Github)`
	color: white;
	filter: drop-shadow(0.7px 2.3px 1px black );
`

export const LogoCont = styled.div`
	display: flex;
	justify-self: start;
	justify-content: center;
	align-items: center;
	z-index: 10;
	padding: 0rem 1.2rem;
	min-width: 15%;
`

export const NavIconCont = styled.div`
	cursor: pointer;
	display: flex;
	width: 2em;
	justify-content: center;
	align-items: center;
	margin-right: 1em;
`
export const NavIcon = styled.a`
	width: 3em;
`
export const LogoLink = styled(LinkS)``

export const MenuCont = styled.ul`
	width: 100%;
	padding: 0;
	margin: 0;
	max-width: 15em;
	display: flex;
	justify-content: space-between;

	align-items: center;
	@media screen and (max-width: 600px) {
		display: none;
	}
`
export const MenuItem = styled.li`
	height: 100%;
	flex-basis: 33%;
	cursor: pointer;
	margin: 0;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	justify-content: center;
	transition: all 0.2s ease-in;
	&:hover {
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.1) 18%,
			rgba(0, 48, 48, 0.2) 81%
		);
	}
`
export const MenuLink = styled(LinkS)`
	font-size: 1rem;
	text-decoration: none;
`
