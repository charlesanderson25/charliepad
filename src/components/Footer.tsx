import { FaRegCopyright } from 'react-icons/fa';

const Footer = () =>{
    return (
        <div 
            style={{ fontFamily: "Josefin Sans, sans-serif" }} 
            className="flex justify-center bg-darkTheme text-white">
            <h2 ><FaRegCopyright />Charles Anderson</h2>
        </div>
    )
}

export default Footer;