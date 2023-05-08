import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="text-center p-4 bg bg-gray-400">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-cyan-800">Espresso Coffee</h1>
                <NavLink>
                    <Link className={({ isActive }) => isActive ? 'text-blue-500 mr-4 text-2xl' : ' mr-4 text-2xl'} to='/'>Home</Link>
                    <Link className={({ isActive }) => isActive ? 'text-blue-500 mr-4 text-2xl' : ' mr-4 text-2xl'} to='/add-coffee'>Add-Coffee</Link>
                    <Link className={({ isActive }) => isActive ? 'text-blue-500 mr-4 text-2xl' : ' mr-4 text-2xl'} to='/update-coffee'>Update-Coffee</Link>
                </NavLink>
            </div>

        </div>
    );
};

export default Header;