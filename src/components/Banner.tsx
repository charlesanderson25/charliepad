import { SiMicrosoftonenote } from 'react-icons/si';
import CreateNotepad from './CreateNotepad';

const Banner = () => {
  return (
    <div>
      <SiMicrosoftonenote className="text-red-500 text-6xl	" />
      <a href="/">Home</a>
      <CreateNotepad />
    </div>
  );
};

export default Banner;
