import React from 'react'
import Head  from 'next/head'
import Navbar from '../components/HomePage/Navbar/Navbar'
import styles from '../styles/food.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import Shader from '../components/shared/Shader'
import SwiperCore, { Navigation, Pagination} from 'swiper'

import 'swiper/swiper-bundle.css'
import Footer from '../components/HomePage/Footer'
import Links from '../components/shared/Links'

import { gsap, TimelineLite, Power3 } from 'gsap'



export default function Food() {


	SwiperCore.use([Navigation, Pagination ])

	const t1 = new TimelineLite({delay: 0.2})

	const [showArrows, setShowArrows] = React.useState(true)
	const linksArray = [
		{id: 1, name: "Events", description: "Bespoke, luxury events", url:'/events'},
		{id: 2, name: "Our Team", description: "Event creatives, designing unique experiences", url: '/about'}
	]


	React.useEffect( () => {
		t1.from('#animation__wrapper', {opacity: 0, ease: Power3.easeOut, delay: 0 })
	},[])

	return(
		<div className={styles.wrapper}>
			<Head>
				<title>Delicious food</title>
			</Head>
			<Navbar position="absolute" />
			<div className={styles.hero}>
				<Shader opacity="0.3" />
				<img  id="animation__wrapper" src="/images/food_hero1.jpg" alt="Hero img" className={styles.hero__image} />
				<h1>An extraordinary food experience</h1>
			</div>
			<div className={styles.section} >
				<h1>Created with passion, designed to inspire</h1>
				<p>We provide extraordinary culinary experiences. Our menus are created with passion and designed to inspire your guests, evoke conversation and challenge perception.</p>
				<div className={styles.section__hospitality} >
					<img src="/images/hospitality.jpg" alt="delicious hospitality food" />
				</div>
				<h1>Crafting the perfect menu for any occasion</h1>
				<p>Our team thrive on finding new and exciting sources of inspiration, whether it be collaborations with top chefs, eating in the finest restaurants or even the melting pot of culture and world cuisine right on our doorstep in Hoxton – fresh and inventive ideas are all around.</p>
			</div>
			<div className={styles.swiper}>
				<Swiper
				navigation = { !showArrows && false }
				pagination autoplay={{ delay: 1000}} speed={500} loop="true">
					<SwiperSlide><img src="/images/slide4.jpg" alt="slide4" /></SwiperSlide>
					<SwiperSlide><img src="/images/slide1.jpg" alt="slide1" /></SwiperSlide>
					<SwiperSlide><img src="/images/slide5.jpg" alt="slide5" /></SwiperSlide>
					<SwiperSlide><img src="/images/slide2.jpg" alt="slide2" /></SwiperSlide>
					<SwiperSlide><img src="/images/slide3.jpeg" alt="slide3" /></SwiperSlide>
				</Swiper>
			</div>
			<div className={styles.presentation}>
				<h1>Nothing but spectacular</h1>
				<p>Spectacular menus make for memorable events.</p>
			</div>
			<div className={styles.presentation__section1}>
				<img src="/images/presentation__section1.jpg" alt="section1" />
				<div>
					<h1>Bespoke to your event</h1>
					<p>Our chefs love creating menus bespoke to individual events, theming them around exhibition openings across some of our favourite venues, your favourite dish, childhood memories or milestone occasions.</p>
				</div>
			</div>
			<div className={styles.presentation__section2}>
				<div>
					<h1>Produce is paramount</h1>
					<p>Our food is carefully designed to showcase the best seasonal produce available to us throughout the year. We work hard to foster strong relationships with the finest suppliers in the business, focussing on ethical and sustainably sourced ingredients across the board. The care and attention paid to our produce shines through into our menus; each component, chosen at its best, to provide you with the perfect dish for your event.</p>
				</div>
				<img src="/images/presentation__section2.jpg" alt="section1" />
			</div>
			<Links links={linksArray} />
			<Footer />
		</div>
	)
}