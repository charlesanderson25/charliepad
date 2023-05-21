import { SiMicrosoftonenote as IconLogoNotepad } from "react-icons/si";
import CreateNotepad from "./CreateNotepad";

const Banner = () => {
  return (
    <div
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
      className="flex bg-darkTheme flex-col md:flex-row justify-between items-center p-4"
    >
      <div className="flex items-center">
        <a href="/" className="flex items-center mr-4">
          <IconLogoNotepad className="bg-defaultRed text-6xl" />
          <h1 className="font-bold text-lg text-white">CharliePad</h1>
        </a>
        <a className="text-white" href="/">
          Home
        </a>
      </div>
      <CreateNotepad />
    </div>
  );
};

export default Banner;
