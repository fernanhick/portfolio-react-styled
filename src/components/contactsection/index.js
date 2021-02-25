import React from "react"
import {
	CEmail,
	CFInput,
	CFormContent,
	CName,
	ContactCont,
	ContactForm,
	ContFormFields,
	CFSend,
	ContactFormImg,
	CLableWrap,
	CFHeader,
} from "./ContactSectionStyles"

function ContactSection() {
	return (
		<>
			<ContactCont>
				<ContactForm>
					<CFHeader>Contact Me</CFHeader>
					<ContFormFields>
						<CLableWrap>
							<CName placeholder="Name" />
							<CEmail placeholder="Email" />
						</CLableWrap>
						<CFormContent>
							<CFInput></CFInput>
							<CFSend>Send</CFSend>
						</CFormContent>
					</ContFormFields>
					<ContactFormImg />
				</ContactForm>
			</ContactCont>
		</>
	)
}

export default ContactSection
