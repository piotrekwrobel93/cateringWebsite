import React from 'react'
import Head from 'next/head'
import Navbar from '../components/HomePage/Navbar/Navbar'
import Shader from '../components/shared/Shader'
import styles from '../styles/events.module.css'
import TwoColSection from '../components/shared/TwoColSection'
import Footer from '../components/HomePage/Footer'

import { gsap, TimelineLite, Power3 } from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Events() {




	const sectionRef = React.useRef(null)
	const t1 = new TimelineLite({delay: 0.2})
	const t2 = new TimelineLite({delay: 0})

	React.useEffect( () => {
			t1.from('#animation__image', { opacity: 0, ease: Power3.easeOut})
			const anim = t2.from( sectionRef.current, { y: 20, opacity: 0, ease: Power3.easeOut, delay: 0.2, duration:1})

			ScrollTrigger.create({
				trigger: sectionRef.current,
				animation: anim,
				start: "top center+=100px",
				end: "top 100px"
			})
	}, [])


	// JSX
	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Events</title>
			</Head>

			<Navbar position="absolute" />

			<div className={styles.hero}>
				<Shader opacity="0.4" />
				<img src="/images/service_hero.jpg" alt="Hero img" className={styles.hero__image} id="animation__image" />
				<h1>From planning to perfection</h1>
			</div>
			<div className={styles.section}>
				<h1>A luxury catering experience</h1>
				<p>Our creative team thrive on helping you bring your ideas and vision to life, however unusual or out of the ordinary. We design bespoke experiences - everything from intimate dinners in private homes to beautiful weddings in country estates, galas for royalty and large-scale corporate events.</p>
				<img src="/images/event_section.jpg" alt="events" />
				<h1>Your event - Your style</h1>
				<p>We approach every event on a bespoke basis, working to ensure your vision is delivered. One of our dedicated team will guide you through every aspect of your event.</p>
			</div>

			<div ref={sectionRef}>
				<TwoColSection img="/images/events_one.jpg"  title="Corporate" position="right" >
					<p>Corporate events should be fun. We apply our innovative approach to every occasion ensuring any corporate event stands out whether it's a one-off networking reception, dinner with clients, a product launch or a string of conference events and galas.</p>
				</TwoColSection>
				<TwoColSection img="/images/events_two.jpg" title="Weddings" position="left">
					<p>Your special day catered with love and care. From wedding styling advice and theme curation to invitations, wedding stationery, venue advice and bespoke menu design - we will be with you every step of the way.</p>
				</TwoColSection>
				
				<TwoColSection img="/images/events_three.jpg" title="Private Dining" position="right">
					<p>Your special day catered with love and care. From wedding styling advice and theme curation to invitations, wedding stationery, venue advice and bespoke menu design - we will be with you every step of the way.</p>
				</TwoColSection>
				<TwoColSection img="/images/events_four.jpg" title="Pop-Ups" position="left">
					<p>Need a café in the middle of a field? We can help you with that. We have mastered our pop-up expertise through years of working with the likes of the Affordable Art Fair, Decorex and British Art Fair teams.</p>
				</TwoColSection>
				<TwoColSection img="/images/events_five.jpg" title="Experimental" position="right">
					<p>Experiential events; amazing food with all the added extras. If you're looking for something out of the ordinary our team will design a bespoke, multisensory and immersive experience like no other. Let imaginations run wild and the magic begin. </p>
				</TwoColSection>
				<TwoColSection img="/images/events_six.jpg" title="International" position="left">
					<p>Catering abroad doesn't have to be daunting. Whether you're planning a wedding, birthday party or a large scale corporate event around the world, our team can be on hand to help. </p>
				</TwoColSection>
			</div>
			<Footer />
		</div>
	)
}
