import styles from './section.module.css'
import React, { useEffect } from 'react'
import Shader from './Shader'
// Component
const Section = ({background, children}) => {


	return(
		<div className={styles.section + " section"} >
			<div className={styles.heroImageContainer}>
				<img src={background} alt="fun" className={styles.heroImage} />
			</div>
			{children}
		</div>
	)
}

export default Section