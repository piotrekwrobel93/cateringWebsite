const DownArrow = ({width,height, fill, onClick}) => {

	return (
		<svg  xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill || "#fff"} clipRule="evenodd" onClick={onClick}>
			<path strokeWidth={2} stroke={fill || "#fff"} d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
		</svg>
	)
}
export default DownArrow