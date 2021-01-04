import React from 'react'

import styles from './sectionContainer.module.css'

const SectionContainer = ( {children} ) => {
	
	return(
		<div className={styles.container}>
			{children}
		</div>
	)
}

export default SectionContainer