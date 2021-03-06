import styles from './links.module.css'
import RightIcon from '../../../public/icons/RightArrow'
import Link from 'next/link'
const Links = ({links}) => {
	return(
		<div className={styles.links__wrapper} >
			<div className={styles.links}>
				{links.map( (link) => (
					<Link key={link.id} href={link.url}>
						<div>
							<h1><Link href="/events">{link.name}</Link></h1>
							<p>{link.description}</p>
							<RightIcon />
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Links