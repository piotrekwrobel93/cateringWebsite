import Head from 'next/head'
import React from 'react'
import Section from '../components/HomePage/Section/Section'
import DownArrowIcon from '../public/icons/DownArrow'
import styles from '../styles/index.module.css'
import Navbar from '../components/HomePage/Navbar/Navbar'
import ReactFullpage from '@fullpage/react-fullpage';
import RightArrowIcon from '../public/icons/RightArrow'
import Footer from '../components/HomePage/Footer'
import Link from 'next/link'

import { gsap, TimelineLite, Power3 } from 'gsap'



export default function Home() {


	const [index,setIndex] = React.useState(0)
	const [ animateLogo , setAnimateLogo] = React.useState(false)

	const t1 = new TimelineLite({ delay: 0.2 })

	React.useEffect( () => {
		t1.from( '.animation__hero' , {
			y:15,
			opacity: 0,
			ease: Power3.easeOut,
			delay: 0.2
		})
	},[])	

	// JSX
  return (
    <>
      <Head>
        <title>JHCatering&Co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  <Navbar 
		  position="fixed"
	  />

	  <ReactFullpage
		onLeave={(origin, destination, direction) => {
		}}
		render={({ state, fullpageApi }) => {
		return (
			<div className="animation__hero">
				<Section title="Food" content="some content" background="/images/img1.jpg">
				<div className={styles.subtitle}>
					<p className={styles.subtitle__paragraph}>Creating spectacular occasions with a magical sense of the unexpected, exquisite taste and meticulous craft.</p>
					<DownArrowIcon width="24" height="24" className={styles.icon}/>
				</div>
				</Section>
				<Section background="/images/hero2.jpg">
					<Link href="/food">
						<div className={styles.subtitle2 + " section__hover"}>
							<h2>Food</h2>
							<h1>Beautifully curated menus for any event</h1>
							<p>Our food, created with passion, designed to inspire, evoke conversation and  challenge perception</p>
							<RightArrowIcon />
						</div>
					</Link>
				</Section>
				<Section background="/images/hero3.jpg">
					<Link href="/events">
						<div className={styles.subtitle3} >
							<h2>Events</h2>
							<h1>Your events, your style, our creative flair</h1>
							<p>A bespoke approach to luxury events, individually designed to capture your vision</p>
							<RightArrowIcon />
						</div>
					</Link>
				</Section>
				<Section background="/images/hero4.jpg">
					<Link href="/about">
						<div className={styles.subtitle4} >
							<h2>Services</h2>
							<h1>Beautifully curated menus for any event</h1>
							<p>Our food, created with passion, designed to inspire, evoke conversation and  challenge perception</p>
							<RightArrowIcon />
						</div>
					</Link>
				</Section>
				<div className="section fp-auto-height">
					<Footer />
				</div>
			</div>
		);
		}}
	/>
    </>

  )
}
