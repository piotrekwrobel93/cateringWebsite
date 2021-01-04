import styles from './shader.module.css'

const Shader = ({opacity}) => {
	return <div className={styles.shader} style={{
		backgroundColor: `rgba(0, 0, 0, ${opacity})`
	}}></div>
}

export default Shader