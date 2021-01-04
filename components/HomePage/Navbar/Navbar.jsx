import React from 'react'
import styles from './navbar.module.css'
import BurgerIcon from '../../../public/icons/Burger'
import ExitIcon from '../../../public/icons/Exit'
import Link from 'next/link'





const Navbar = ({position}) => {


	const [openMenu, setOpenMenu ] = React.useState(false)

	const handleClick = () => {
		setOpenMenu( !openMenu )
	}

	React.useEffect( () => {

		if( openMenu ) {
			let x = window.scrollX;
			let y = window.scrollY;
			window.onscroll = function(){window.scrollTo(x, y);};
		} else {
			window.onscroll = function(){} 
		}

	},[openMenu])

	return(
		<>
		{ openMenu && (
			<div className={styles.mobileMenu} >
				<div>
					<Link href="/">
						<img src="/images/logo.png" alt="logo" width="150px" height="100px" style={{marginBottom: "2rem"}}/>
					</Link>
				</div>
				<ul>
					<li><Link href="/food">Food</Link></li>
					<li><Link href="/events">Events</Link></li>
					<li><Link href="/about">About Us</Link></li>
					<li><Link href="/contact">Contact</Link></li>
				</ul>
				<ExitIcon className={styles.exit} onClick={handleClick}/>
			</div>
			
		)}
			<div className={styles.navbar} style={{
				position: `${position}`
			}}>
				<div className={styles.mobileNav} >
					<BurgerIcon onClick={handleClick} />
				</div>
				<ul>
					<li><Link href="/food">Food</Link></li>
					<li><Link href="/events">Events</Link></li>
				</ul>
				<Link href="/">
					<img src="/images/logo.png" alt="logo" className={styles.logo}/>
				</Link>
				<ul>
					<li><Link href="/about">About us</Link></li>
					<li><Link href="/contact">Contact</Link></li>
				</ul>
			</div>
		</>
	)
}

export default Navbar