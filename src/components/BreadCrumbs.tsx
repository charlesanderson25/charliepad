import { FaLongArrowAltRight as ArrowIcon } from "react-icons/fa";
import { Link } from "react-router-dom";

const textBreadCrumbs = {
  home: "Home",
  edit: "Edit",
};

const BreadCrumbs = () => {
  return (
    <div className="flex items-center gap-2">
      <Link to="/">{textBreadCrumbs.home}</Link>
      <ArrowIcon />
      <Link to="/editar-notepad/:id">{textBreadCrumbs.edit}</Link>
    </div>
  );
};

export default BreadCrumbs;
