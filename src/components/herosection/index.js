import React from "react"
import {
	HeroContainer,
	HeroDesc,
	HeroHeader,
	HeroPic,
	HeroTitle,
	HeroWrapper,
} from "./HeroSecElements"

function HeroSection() {
	return (
		<>
			<HeroContainer id="home">
				<HeroWrapper><HeroPic>
						<img
							src="/images/prof.jpg"
							id="profile"
							width="190px"
							height="190px"
							border-bottom="0px"
							background="grey"
							alt="profile pic"
						/>
					</HeroPic>
					<HeroHeader>Welcome</HeroHeader>
					<HeroTitle className="box">I'm Fernando A F Hickman</HeroTitle>
					<HeroDesc>Graduated as a Software Engineer.</HeroDesc>
					<HeroDesc>Experienced in Front-End Web Development.</HeroDesc>
					
				</HeroWrapper>
			</HeroContainer>
		</>
	)
}

export default HeroSection
