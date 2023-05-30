// import { FaRegCopyright } from 'react-icons/fa';

// const Footer = () =>{
//     return (
//         <div 
//             style={{ fontFamily: "Josefin Sans, sans-serif" }} 
//             className="flex justify-center bg-darkTheme text-white">
//             <h2 className='flex justify-center items-center m-5 tracking-wide' ><FaRegCopyright className="tracking-wide" />Charles Anderson</h2>
//         </div>
//     )
// }

// export default Footer;

import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <div 
            style={{ fontFamily: "Josefin Sans, sans-serif" }} 
            className="flex justify-center bg-darkTheme text-defaultRed"
        >
            <div className="flex items-center m-5">
                <div className="mr-2">
                    <CopyrightIcon />
                </div>
                <h2 className="tracking-wide">Charles Anderson</h2>
            </div>
        </div>
    );
}

const CopyrightIcon = () => {
    return <FaRegCopyright />;
}

export default Footer;