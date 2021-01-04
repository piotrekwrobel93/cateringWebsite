import styles from './twocolsection.module.css'
import React from 'react'
const TwoColSection = ({img, title, position, children }) => {

	const [ isMobile , setIsMobile ] = React.useState(false)

	React.useEffect( () => {
		if( window.innerWidth <= 768 ) {
			setIsMobile( true )
		}
	},[])

	return(
		<div className={styles.wrapper}>
			<img src={img} alt="section image" />
			<div style={{
				order: position === 'left' ? 1 : 3
			}}>
				<h1>{title}</h1>
				{children}
			</div>
		</div>
	)
}


export default TwoColSection