import React from "react"
import {
	LogoCont,
	LogoLink,
	MenuCont,
	MenuItem,
	NavbarContainer,
	MenuLink,
	NavIconCont,
	NavIcon,
} from "./NavbarElements"

function Navbar() {
	return (
		<div>
			<NavbarContainer>
				<LogoCont>
					<LogoLink>Logo</LogoLink>
				</LogoCont>
				<MenuCont>
					<MenuItem>
						<MenuLink to="home">Home</MenuLink>
					</MenuItem>
					<MenuItem>
						<MenuLink to="projects">Projects</MenuLink>
					</MenuItem>
					<MenuItem>
						<MenuLink to="about">About</MenuLink>
					</MenuItem>
				</MenuCont>
				<NavIconCont>
					<NavIcon></NavIcon>
				</NavIconCont>
			</NavbarContainer>
		</div>
	)
}

export default Navbar
