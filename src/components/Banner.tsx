import { SiMicrosoftonenote as IconLogoNotepad } from "react-icons/si";
import ButtonCreateNotepad from "./ButtonCreateNotepad";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
      className="flex bg-darkTheme flex-col md:flex-row justify-between items-center p-6 "
    >
      <div className="flex items-center">
        <Link to="/" className="flex items-center mr-16">
          <IconLogoNotepad className="bg-defaultRed text-6xl m-1 " />
          <h1 className="font-bold text-2xl text-white hover:text-defaultRed">
            CharliePad
          </h1>
        </Link>
        <Link
          className="text-white text-l font-bold hover:text-defaultRed"
          to="/"
        >
          Home
        </Link>
      </div>
      <ButtonCreateNotepad />
    </div>
  );
};

export default Banner;
