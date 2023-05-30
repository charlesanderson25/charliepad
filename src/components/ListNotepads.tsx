import { Link } from "react-router-dom";

const ListNotepads = () =>{
    return (
        <div>
            <Link to="/listar-notepads" className="pl-12">
            <button className="text-white text-l font-bold hover:text-defaultRed tracking-wide">
                Listar Notepads
            </button>
            </Link>
        </div>
    )
}

export default ListNotepads;