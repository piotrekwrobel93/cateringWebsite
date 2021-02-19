export default function UpArrow({width, height, fill, onClick}){

    return(
        
<svg width={width || "24"} height={height || "24"} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" fill={fill || "#fff"} clipRule="evenodd" onClick={onClick}>
    <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/>
</svg>
    )
}