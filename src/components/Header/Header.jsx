import Slider from "./Slider";


const Header = () => {
    return (
        <div className="w-5/6 mx-auto rounded-md">
            <div className=" mt-2 relative" id="home">
                <h1 className="text-6xl">KCF Co. Ltd.</h1>
                <h5 className="text-lg">Japan Based Consultancy, Supplier & Distributor Company</h5>
            </div>
            <Slider></Slider>
        </div>
    );
};

export default Header;