import styled from "styled-components"
import { Link as LinkS } from "react-scroll"

export const NavbarContainer = styled.nav`
	position: fixed;
	
	width: 100%;
	height: 3em;
	backdrop-filter: blur(10px) grayscale(0.5) opacity(0.8);	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	z-index: 999;
	box-shadow: 0 0 15px;
`
export const LogoCont = styled.div`
	display: flex;
	justify-self: start;
	justify-content: center;
	align-items: center;
	z-index: 10;
	padding: 0rem 1.2rem;
`

export const NavIconCont = styled.div``
export const NavIcon = styled.div`
	width: 3em;
`
export const LogoLink = styled(LinkS)`
	font-size: 1.6rem;
`

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
		background-color: rgba(0, 0, 0, 0.2);

		border-bottom: solid 2px rgba(0, 0, 0, 1);
	}
`
export const MenuLink = styled(LinkS)`
	font-size: 1rem;
	text-decoration: none;
`
