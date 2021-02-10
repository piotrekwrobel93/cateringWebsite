import React from 'react'
import Head from 'next/head'
import styles from '../styles/contact.module.css'
import Navbar from '../components/HomePage/Navbar/Navbar'
import Footer from '../components/HomePage/Footer'

// Icons
import ContactIcon from '../public/icons/Contact'
import MailIcon from '../public/icons/Mail'
import TwitterIcon from '../public/icons/Twitter'
import InstagramIcon from '../public/icons/Instagram'
import DoneIcon from '../public/icons/Done'

const Contact = () => {

	const emailRef = React.useRef(null)
	const phoneRef = React.useRef(null)

	const [ showFormConfirmation, setShowFormConfirmation ] = React.useState( false )
	const [ name, setName ] = React.useState('')
	const [ email, setEmail ] = React.useState('')
	const [ phone, setPhone ] = React.useState('')
	const [ type, setType ] = React.useState('')
	const [ message, setMessage ] = React.useState('')
	const [ error, setError ] = React.useState({name:""})
	const [ isError, setIsError ] = React.useState(false)


	const resetFields = () => {
		setName('')
		setEmail('')
		setPhone('')
		setType('')	
		setMessage('')
	}


	const submitForm = e => {	
		e.preventDefault()
		if( email.includes('@') === false || email.includes('.') === false) {
			setIsError( true )
			setError({name:"Provide a correct email address"})
			emailRef.current.focus()
			setEmail('')
		}
		else if( isNaN( phone ) || phone.length < 8 ) {
			setIsError( true )
			setError({ name: "Invalid phone number. Only numbers can be used"})
			phoneRef.current.focus()
			setPhone('')
		} else {
			setIsError( false )
			setShowFormConfirmation(true)
			resetFields()
		}
	}

	React.useEffect( () => {
		if (showFormConfirmation) {
			setTimeout( () => {
				setShowFormConfirmation(!showFormConfirmation)
			},3000)
		}
	},[showFormConfirmation])



	return(
		<div className={styles.wrapper}>
			<Head>
				<title>Contact us</title>
			</Head>
			{ showFormConfirmation && (
				<>
					<div className={styles.confirmation } >
						<DoneIcon fill="#fff" />
						<p>Your request has been send. We will get back to you shortly.</p>
					</div>
				</>
			)}
			<Navbar position="absolute" />
			<div className={styles.hero}>
				<h1>Contact us</h1>
			</div>
			<div className={styles.container}>
				<div className={styles.sections}>
					<div className={styles.leftSection}>
						<h1>Here to help</h1>
						<p>Whether you’re ready to book an event or have some questions that need answering, we’re always available and on hand.</p>
					</div>
					<div className={styles.address}>
						<h3>Address</h3>
						<p>404 Union Walk Arches, Cremer Street,<br /> London, E2 8HG</p>
					</div>
					<div className={styles.contact}>
						<h3>Contact</h3>
						<ul>
							<li>
								<ContactIcon width="20px" fill="green" />
								<p>0207 729 3062</p>
							</li>
							<li>
								<MailIcon width="20px" fill="green" />
								<p>support@jhicatering.co.uk</p>
							</li>
						</ul>
					</div>
					<div className={styles.follow}>
						<h3>Follow</h3>
						<ul>
							<li>
								<TwitterIcon width="20" fill="green" />
							</li>
							<li>
								<InstagramIcon  width="20" fill="green" />
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.rightSection}>
					<div className={styles.form}>
						<h1>About you</h1>
						{ isError && (
							<>
								<p className={styles.error}>{error.name}</p>
							</>
						)}
						<form  autoComplete="none" onSubmit={ e => submitForm(e) }>
							<label htmlFor="name">Your Name*</label>
							<input type="text" name="name"  autoComplete="none" required value={name} onChange={ e => setName(e.target.value)}/>
							<label htmlFor="email">Email*</label>
							<input type="text" name="email" autoComplete="none" required ref={emailRef} value={email} onChange= {( e => setEmail(e.target.value))} />
							<label htmlFor="phone">Phone number*</label>
							<input type="text" name="phone" autoComplete="none" required ref={phoneRef} value={phone} onChange = { e => setPhone( e.target.value)} />
							<label htmlFor="enquiry">Type of enquiry</label>
							<select name="enquiry" required  value={type} onChange={ e => setType( e.target.value )}>
								<option value="corpo" >Corporate Event</option>
								<option value="private" >Private Dining</option>
								<option value="wedding" >Wedding Day</option>
							</select>
							<label htmlFor="moreInfo">Further information*</label>
							<textarea name="moreInfo" required value={message} onChange={ e => setMessage( e.target.value )}>
							</textarea>
							<label htmlFor="subscribe">Are you happy to hear from us?</label>
							<div>
								<input type="radio" />
								<h3>Subscibe to our newsletter</h3>
							</div>
							<p>By ticking ‘subscribe to our newsletter’, you consent to receive email updates from JHCatering&Co. For details on how we use your information or how to unsubscribe, see our Privacy Policy.</p>
							<input type="submit" name="submit" value="Submit" onClick={ () => {
								window.scrollTo({top: 0, left: 0,behavior: "smooth"})
							}}/>
						</form>
					</div>
				</div>
			</div>
			<div className={styles.work}>
				<h1>Interested in joining our team</h1>
				<p>We are always on the lookout for like-minded, passionate people to join the Clerkenwell Green team. If you feel you would like to be a part of it, get in touch. We look forward to hearing from you.</p>
			</div>

			<Footer/>
		</div>
	)
}

export default Contact