import Head from 'next/head'
import React from 'react'
import Section from '../components/HomePage/Section/Section'
import DownArrowIcon from '../public/icons/DownArrow'
import styles from '../styles/index.module.css'
import Navbar from '../components/HomePage/Navbar/Navbar'
import RightArrowIcon from '../public/icons/RightArrow'
import Footer from '../components/HomePage/Footer'
import Link from 'next/link'
import FSScroll  from '../helpers/index'
import { isMobile } from '../helpers/index'



export default function Home() {

	
	const containerRef = React.useRef(null)

	// SIDE EFFECTS
	React.useEffect( () => {
		window.onbeforeunload = () => window.scrollTo(0,0)
		if ( !/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent) ) {
			const fs = new FSScroll(containerRef.current, document.querySelectorAll(".f-section"))
			fs.init()
			return () => fs.destroy()
		} 
		
		// CLEAN-UP
	},[])

	// JSX
  return (
    <div className="meta-wrapper" ref={containerRef}>
      <Head>
        <title>JHCatering&Co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  <Navbar 
		  position="fixed"
	  />
			<div className="animation__hero">
				<div className="f-section">
					<Section title="Food" content="some content" background="/images/img1-2.webp">
						<div className={styles.subtitle}>
							<p className={styles.subtitle__paragraph}>Creating spectacular occasions with a magical sense of the unexpected, exquisite taste and meticulous craft.</p>
							<DownArrowIcon width="24" height="24" className={styles.icon}/>
						</div>
					</Section>
				</div>
				<div className="f-section">
				<Section background="/images/hero2.webp">
					<Link href="/food">
						<div className={styles.subtitle2 + " section__hover"}>
							<h2>Food</h2>
							<h1>Beautifully curated menus for any event</h1>
							<p>Our food, created with passion, designed to inspire, evoke conversation and  challenge perception</p>
							<RightArrowIcon />
						</div>
					</Link>
				</Section>
				</div>
				<div className="f-section">
				<Section background="/images/hero3.webp">
					<Link href="/events">
						<div className={styles.subtitle3} >
							<h2>Events</h2>
							<h1>Your events, your style, our creative flair</h1>
							<p>A bespoke approach to luxury events, individually designed to capture your vision</p>
							<RightArrowIcon />
						</div>
					</Link>
				</Section>
				</div>
				<div className="f-section">
				<Section background="/images/hero4.webp">
					<Link href="/about">
						<div className={styles.subtitle4} >
							<h2>Services</h2>
							<h1>Beautifully curated menus for any event</h1>
							<p>Our food, created with passion, designed to inspire, evoke conversation and  challenge perception</p>
							<RightArrowIcon />
						</div>
					</Link>
				</Section>
				</div>
				<div className="f-section">
					<div className="section fp-auto-height">
						<Footer />
					</div>
				</div>
			</div>
    </div>

  )
}
