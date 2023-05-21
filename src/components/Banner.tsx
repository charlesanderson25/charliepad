import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faCheckSquare, faCoffee);

const Banner = () => {
  return (
    <div>
      <p>Ohhhh No!</p>
      <FontAwesomeIcon icon="check-square" />
      Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
      <FontAwesomeIcon icon={faFacebook} />
    </div>
  );
};

export default Banner;
