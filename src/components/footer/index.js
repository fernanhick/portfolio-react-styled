import React from "react"
import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"
import {
	FooterContainer,
	FooterWrap,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights,
} from "./FooterElements"

function Footer() {
	const toggleHome = () => {
		scroll.scrollToTop()
	}
	return (
		<>
			<FooterContainer>
				<FooterWrap>
					{/* <FoooterLinksContainer>
            <FooterLinksWrapper></FooterLinksWrapper>
          </FoooterLinksContainer> */}
					<SocialMedia>
						<SocialMediaWrap>
							<SocialLogo to="/" onClick={toggleHome}>
								Fernando A F Hickman
							</SocialLogo>
							<WebsiteRights>
								<small>
									&copy; Copyright {new Date().getFullYear()}, TechFer
									Corporation
								</small>
							</WebsiteRights>
							<SocialIcons>
								<SocialIconLink
									href="https://github.com/fernanhick"
									target="_blank"
									aria-label="Github"
								>
									<FaGithub />
								</SocialIconLink>{" "}
								<SocialIconLink
									href="https://www.facebook.com/fernando.fhickman/"
									target="_blank"
									aria-label="Facebook"
								>
									<FaFacebook />
								</SocialIconLink>
								<SocialIconLink
									href="https://www.instagram.com/fernan.hick/"
									target="_blank"
									aria-label="Instagram"
								>
									<FaInstagram />
								</SocialIconLink>
								<SocialIconLink
									href="https://twitter.com/FernanHickman"
									target="_blank"
									aria-label="Twitter"
								>
									<FaTwitter />
								</SocialIconLink>
								<SocialIconLink
									href="https://www.linkedin.com/in/fernando-f-hickman-77882496/"
									aria-label="Linkedin"
								>
									<FaLinkedin />
								</SocialIconLink>
							</SocialIcons>
						</SocialMediaWrap>
					</SocialMedia>
				</FooterWrap>
			</FooterContainer>
		</>
	)
}

export default Footer
