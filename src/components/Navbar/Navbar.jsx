import { Link } from "react-router-dom";
import logo from "../../../public/images/1.png";

const Navbar = () => {
  return (
    <div className="border-b pb-2 md:sticky md:top-0 z-10 bg-white">
      <nav className="py-3 px-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="">
            <div className="w-40 ml-10">
              <img src={logo} alt="" />
            </div>
          </div>
          <ul className="flex flex-wrap md:flex-row lg:flex-row justify-between gap-5 text-sm">
            <li>
              <button>
                <Link
                  className="btn btn-sm px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"
                  to="/"
                >
                  HOME
                </Link>
              </button>
            </li>
            <li>
              <button>
                <a
                  className="btn btn-sm px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"
                  href="#wwd"
                >
                  WHAT WE DO
                </a>
              </button>
            </li>
            <li>
              <button>
                <Link
                  to="distributors"
                  className="btn btn-sm px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"
                >
                  DISTRIBUTOR
                </Link>
              </button>
            </li>
            <li>
              <button>
                <a
                  href="#clients"
                  className="btn btn-sm px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"
                >
                  HONORABLE CLIENTS
                </a>
              </button>
            </li>
            <li>
              <button>
                <a
                  href="#wwo"
                  className="btn btn-sm px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"
                >
                  WHAT WE OFFER
                </a>
              </button>
            </li>
            {/* Drawer */}
            <li className="relative">
              <details className="group">
                <summary className="btn btn-sm px-2 py-2 md:px-2 md:py-1 lg:px-5 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400 cursor-pointer">
                  Who We Are ↓
                </summary>
                <ul className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-2 z-20 hidden group-open:block">
                  <li>
                  <button>
                      <Link
                        to="/whoweare"
                        className="block px-4 py-2 text-blue-400 hover:bg-gray-100 rounded-md"
                      >
                        OUR TEAM
                      </Link>
                    </button>
                  </li>
                  <li>
                    <button>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-blue-400 hover:bg-gray-100 rounded-md"
                      >
                        CONTACT US
                      </Link>
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
