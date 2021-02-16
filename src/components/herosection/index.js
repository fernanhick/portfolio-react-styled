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
			<HeroContainer>
				<HeroWrapper>
					<HeroHeader>Welcome</HeroHeader>
					<HeroTitle className="box">I'm Fernando A F Hickman</HeroTitle>
					<HeroDesc>Graduated as a Software Engineer.</HeroDesc>
					<HeroDesc>Experienced in Front-End Web Development.</HeroDesc>
					<HeroPic><img
              src='/images/prof.jpg'
              id='profile'
              width='90px'
              height='90px'
              background='grey'
              alt='profile pic'
            /></HeroPic>
				</HeroWrapper>
			</HeroContainer>
		</>
		
	)
}

export default HeroSection
