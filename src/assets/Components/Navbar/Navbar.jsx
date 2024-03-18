import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setMenu] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Products', path: '/products' }
    ];
    return (
        <nav className="text-white bg-cyan-700 p-2">
            <div className="md:hidden text-3xl px-2" onClick={() => setMenu(!isOpen)}>
                {
                    isOpen === true ?
                    <IoMdCloseCircleOutline /> :
                        <CiMenuKebab /> 
                }
            </div>

            <ul className={`lg:flex gap-10 absolute md:static duration-1000 bg-cyan-900 px-6 rounded-xl py-2 shadow-xl
            ${isOpen?'top-11':'-top-60'}
            `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;