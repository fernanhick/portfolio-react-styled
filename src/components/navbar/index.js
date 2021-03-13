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
import { CgMenuGridR  } from 'react-icons/cg'
function Navbar() {
	return (
		<NavbarContainer>
			<LogoCont>
				<LogoLink
					to="home"
					smooth={true}
					dureation={500}
					spy={true}
					exact="true"
				>
					FernandoAFH
				</LogoLink>
			</LogoCont>
			<MenuCont>
				<MenuItem>
					<MenuLink
						to="home"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
					>
						Home
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						to="projects"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
					>
						Projects
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						to="about"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
					>
						About
					</MenuLink>
				</MenuItem>
			</MenuCont>
			<NavIconCont>
				<CgMenuGridR />
			</NavIconCont>
		</NavbarContainer>
	)
}

export default Navbar
