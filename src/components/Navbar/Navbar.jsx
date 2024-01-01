import { Link } from "react-router-dom";
import logo from "../../../public/images/1.png"

const Navbar = () => {
    return (
        <div className="border-b pb-2 md:sticky md:top-0 z-10 bg-white">
            <nav className="py-3">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="">
                    <div className="w-40 ml-10"><img src={logo} alt="" /></div>
                </div>
                <ul className="flex flex-wrap md:flex-row lg:flex-row justify-between gap-5 text-sm">
                    <li><button
                            ><Link className="px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"
                               to="/">HOME</Link></button></li>
                    <li><button
                            ><a className="px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"
                                href="#wwd">WHAT WE DO</a></button></li>
                    <li><button
                            ><a
                                href="#wwo" className="px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400">WHAT WE OFFER</a></button></li>
                    <li><button
                            ><a
                                href="#successful" className="px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400">SUCCESS STORY</a></button></li>
                    <li><button
                            ><a
                                href="#wwa" className="px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400">WHO WE ARE</a></button></li>
                    <li><button
                            >
                                <Link to="distributors" className="px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400">DISTRIBUTORS</Link>
                                </button></li>
                    <li><button
                            ><Link to="/contact" className="px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"
                                >CONTACT US</Link></button></li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;