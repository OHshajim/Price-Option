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
        <nav>
            <div className="md:hidden text-3xl" onClick={() => setMenu(!isOpen)}>
                {
                    isOpen === true ?
                        <CiMenuKebab /> :
                        <IoMdCloseCircleOutline />
                }
            </div>

            <ul className="lg:flex gap-10">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;