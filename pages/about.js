import React from 'react'
import Head from 'next/head'
import Footer from '../components/HomePage/Footer'
import Navbar from '../components/HomePage/Navbar/Navbar'
import Shader from '../components/shared/Shader'
import TwoColSection from '../components/shared/TwoColSection'
import styles from '../styles/about.module.css'

import { gsap, Power3 } from 'gsap'

export default function About() {


	const t1 = gsap.timeline({ delay: 0.2 })

	React.useEffect( () => {
		t1.from("#animation-image2",{opacity: 0, ease: Power3.easeOut})
	},[])

	// JSX
	return(
		<div>
			<Head>
				<title>About Us</title>
			</Head>
			<Navbar position="absolute" />
			<div className={styles.wrapper}>
				<div className={styles.hero}>
					<Shader  opacity={0.4}/>
					<img src="/images/about_hero.jpg" alt="hero" id="animation-image2"/>
					<h1>Our Team</h1>
				</div>
				<div className={styles.sections} >
					<div className={styles.section1}>
						<h1>The JH<span style={{color: "green"}}>&amp;</span>Co Team</h1>
						<p>We are JH&amp;Co - a bespoke events catering team based out in Edinburgh. We work across some of the country’s finest venues delivering beautifully cool extraordinary events. Food is our passion; ours is carefully designed to showcase the best seasonal ingredients available to us throughout the year.</p>
						<img src="/images/about_one.jpg" alt="staff" />
					</div>
					<div className={styles.section2}>
						<h1>A creative, visionary approach</h1>
						<p>Our creative team thrive on helping you bring your ideas and vision to life - however unusual or out of the ordinary they might seem. We create bespoke experiences – everything from intimate dinners in private homes to beautiful weddings, galas for royalty and large-scale corporate events.</p>
						<ul>
							<li>
								<img src="/images/about_person1.jpg" alt="person1" />
							</li>
							<li>
								<img src="/images/about_person2.jpg" alt="person1" />
							</li>
						</ul>
					</div>
				</div>
				<TwoColSection title="A multidisciplinary approach" img="/images/about1.jpg" position="left">
					<p>We understand how diverse our audience is and we know how important it is to keep a fresh perspective in this business. That's why we choose to surround ourselves with talented people covering a range of skilled backgrounds from creative design, fashion and floristry to Michelin starred kitchens. Your event will be in specialist hands from early enquiry stages through to final delivery.</p>
				</TwoColSection>
				<TwoColSection title="A team of experienced event and hospitality professionals" img="/images/about2.jpg" position="right">
					<p>Each member of our team brings with them a uniquely creative eye and attention to detail that helps our clients and venues feel cared for and understood. Our aim is to provide the best levels of service, every step of the way.</p>
				</TwoColSection>
				<TwoColSection title="The face of the function" img="/images/about3.jpg" position="left">
					<p>Our staff represent us at every level; they are the face of our business and our clients' first point of contact. We want them to be engaging, professional and courteous with a ‘can-do’ attitude. Our staff are the key to the successful delivery of any client brief. Recruiting, training and developing our own team of dedicated staff means they have a commitment to delivering our core values.</p>
				</TwoColSection>
				<div className={styles.work}>
					<h1>Interested in joining our team</h1>
					<p>We are always on the lookout for like-minded, passionate people to join the JH&Co team. If you feel you would like to be a part of it, get in touch. We look forward to hearing from you.</p>
				</div>
				<Footer />
			</div>
		</div>
	)
}