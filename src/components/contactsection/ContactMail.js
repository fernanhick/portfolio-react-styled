import React from "react"
import emailjs from "emailjs-com"

/* import './ContactUs.css';
 */
export default function ContactUs() {
	function sendEmail(e) {
		e.preventDefault()

		emailjs
			.sendForm("service_zzap1vo", "template_0bb9his", e.target, "user_TuOImoxqvX92LyvAx2Pzq")
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)

        
	}

	return (
		<form className="contact-form" onClick={sendEmail}>
			<input type="hidden" name="contact_number" />
			<label>Name</label>
			<input type="text" name="user_name" />
			<label>Email</label>
			<input type="email" name="user_email" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" />
		</form>
	)
}
