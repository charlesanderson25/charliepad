import { SiMicrosoftonenote as IconLogoNotepad } from 'react-icons/si';
import CreateNotepad from './CreateNotepad';

const Banner = () => {
  return (
    <div style={ { fontFamily: 'Josefin Sans, sans-serif' } } className="flex-row">
      <div className="flex-row inline-block">
        
        <a href="/" className="flex">
          <IconLogoNotepad className="bg-defaultRed text-6xl" />
          <h1 className="font-bold text-lg">CharliePad</h1>
        </a>

          <a href="/">Home</a>
        <CreateNotepad />
      </div>
    </div>
  );
};

export default Banner;
