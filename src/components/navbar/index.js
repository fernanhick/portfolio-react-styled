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
	GitLogo,
} from "./NavbarElements"

function Navbar() {
	return (
			<NavbarContainer>
				<LogoCont>
					<LogoLink>FernandoAFH</LogoLink>
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
					<NavIcon href="https://github.com/fernanhick" >
						<GitLogo />
					</NavIcon>
				</NavIconCont>
			</NavbarContainer>
	)
}

export default Navbar
