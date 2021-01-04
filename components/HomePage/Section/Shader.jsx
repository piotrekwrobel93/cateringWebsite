const Shader = ({opacity}) => {
	return(
		<div style={{
			width: "100vw",
			height: "100vh",
			position:"absolute",
			top: 0,
			left: 0,
			background: `rgba(0, 0, 0, ${opacity})`,
			zindex: 10
		}}></div>
	)
}

export default Shader