import React from "react"
import ContactUs from "./ContactMail"
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
				<ContactUs />

				{/* <ContactForm>
					<CFHeader>Contact Me</CFHeader>
					<ContFormFields>
						<CLableWrap>
							<CName placeholder="Name" name="user_name" type="text" />
							<CEmail placeholder="Email" name="user_mail" type="text" />
						</CLableWrap>
						<CFormContent>
							<CFInput></CFInput>
							<CFSend>Send</CFSend>
						</CFormContent>
					</ContFormFields>
					<ContactFormImg />
				</ContactForm> */}
			</ContactCont>
		</>
	)
}

export default ContactSection
