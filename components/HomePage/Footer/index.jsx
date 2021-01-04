import styles from './footer.module.css'
import Link from 'next/link'
const Footer = () => {

	return(
		<>
		<div className={styles.footer}>
			<h3><Link href="/food">See what we do</Link></h3>
			<h3><Link href="/contact">Contact Us</Link></h3>
			<h3><Link href="/about">Our Team</Link></h3>
		</div>
		<div className={styles.footer__panel}>
			<p> 2020 Benugo Limited
				All rights reserved Website by Piotr Wrobel</p>
		</div>
	</>
	)
}

export default Footer