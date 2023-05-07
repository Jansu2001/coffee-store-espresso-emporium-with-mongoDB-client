import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="text-center p-4 bg bg-gray-400">
            <Link className="mr-4 text-2xl" to='/'>Home</Link>
            <Link className="mr-4 text-2xl" to='/add-coffee'>Add-Coffee</Link>
            <Link className="mr-4 text-2xl" to='/update-coffee'>Update-Coffee</Link>
        </div>
    );
};

export default Header;