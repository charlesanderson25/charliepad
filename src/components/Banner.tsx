import { SiMicrosoftonenote } from 'react-icons/si';
import CreateNotepad from './CreateNotepad';

const Banner = () => {
  return (
    <div style={ { fontFamily: 'Josefin Sans, sans-serif' } } className="flex-row">
      <div className="flex-row inline-block">
        <SiMicrosoftonenote className="bg-defaultRed text-6xl	" />
        <a href="/">Home</a>
        <CreateNotepad />
      </div>
    </div>
  );
};

export default Banner;
