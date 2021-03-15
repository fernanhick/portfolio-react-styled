import styled from "styled-components"

export const ContactCont = styled.section`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 1rem;
`

export const ContactForm = styled.div`
	background: linear-gradient(
		90deg,
		rgba(255, 94, 2, 1) 23%,
		rgba(233, 213, 47, 1) 68%,
		rgba(98, 5, 168, 1) 90%
	);
	/* 	max-height: 70vh;
 */
	width: 600px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	padding: 0.3rem;

	margin: 0;
	border-radius: 10px;
	box-shadow: 0 0 17px 1px black;
`
export const CFHeader = styled.h1`
	/* 	writing-mode: vertical-lr;
	text-orientation: mixed; */
`
export const ContFormFields = styled.form`
	background: rgba(11, 11, 11, 0.95);
	display: flex;
	border-radius: 5px;
	width: 100%;
	padding: 1em;
	/* 	min-height: 60vh;
 */
	flex-direction: column;
`

export const CName = styled.input`
	max-width: 18ch;
	border: none;
	margin-bottom: 0.1rem;

	color: white;
	margin-right: 0.5rem;
	height: 1.4rem;
	border-radius: 5px;
	padding: 0.1rem 0.4rem;
	font-size: 1rem;
	&::placeholder {
		color: white;
		opacity: 0.8;
		transition: transform 0.4s;
	}
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.4) 0%,
		rgba(255, 94, 2, 0.7) 100%
	);
	box-shadow: inset 0 0 3px 0.1px black;
	&:hover::placeholder {
		transform: translateY(-15px);
		transition: 0.2s ease-in-out;
		z-index: 999;
	}
`

export const CEmail = styled.input`
	max-width: 30ch;
	font-size: 1rem;
	border: none;
	color: white;
	border-radius: 5px;
	padding: 0.1rem 0.4rem;
	&::placeholder {
		color: white;
		opacity: 0.8;
		transition: transform 0.4s;
	}
	box-shadow: inset 0 0 3px 0.1px black;
	height: 1.4rem;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.4) 0%,
		rgba(255, 94, 2, 0.7) 100%
	);
	&:hover::placeholder {
		transform: translateY(-15px);
		transition: 0.2s ease-in-out;
		z-index: 999;
	}
`

export const CFormContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`
export const CFInput = styled.textarea`
	min-height: 280px;
	border-radius: 10px;
	border: none;
	padding: 0.6rem;
	overflow-wrap: break-word;
	word-wrap: break-word;
	margin: 1rem;
	width: 100%;
	background: rgba(288, 288, 288, 0.9);
	max-width: 69ch;
	box-shadow: inset 0 0 6px 0.5px black;
`
export const CFSend = styled.button`
	font-size: 1.2rem;
	border: none;
	border-radius: 7px;
	width: 7rem;
`
export const ContactFormImg = styled.div``
export const CLableWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: 2rem;
`
