// import Marquee from "react-fast-marquee";
import cpa from "../../../public/images/cpatos.png"

const OurClients = () => {
  return (
    <div id="clients" className="my-40">
      <div className="text-4xl text-center bg-blue-50 lg:w-1/3 rounded-full m-auto my-16 py-5 font-bold">
        Our Honorable Clients
      </div>
      {/* <Marquee>
        <div className="flex space-x-20">
          <img
            className="w-full h-20"
            src="https://i.ibb.co/BnnzZxy/download.png"
            alt=""
          />
          <img
            className="w-full h-20"
            src="https://i.ibb.co/y52k88Q/rfl-logo-62-D52-B1129-seeklogo-com.png"
            alt=""
          />
          <img
            className="w-full h-20"
            src="https://i.ibb.co/SNR1TQw/IR-logo-final.gif"
            alt=""
          />
          <img
            className="w-full h-20"
            src="https://i.ibb.co/LtLLQs5/acmeslogo.png"
            alt=""
          />
          <img
            className="w-full h-20"
            src="https://i.ibb.co/JvDj4T3/incepta-logo-559225-A536-seeklogo-com.png"
            alt=""
          />
        </div>
      </Marquee> */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 my-5 w-11/12 mx-auto">
        {/* card  */}
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-1"
                src="https://i.ibb.co/BnnzZxy/download.png"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-20"
                src="https://i.ibb.co/y52k88Q/rfl-logo-62-D52-B1129-seeklogo-com.png"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-3"
                src="https://i.ibb.co/SNR1TQw/IR-logo-final.gif"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-3"
                src="https://i.ibb.co/LtLLQs5/acmeslogo.png"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-3"
                src="https://i.ibb.co/JvDj4T3/incepta-logo-559225-A536-seeklogo-com.png"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-20"
                src="https://seeklogo.com/images/T/tmss-logo-376F07074E-seeklogo.com.png"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-12"
                src="https://i.ibb.co.com/S7LzYWY/walton-logo-8655-B6-D7-F3-seeklogo-com.png"
                alt="walton"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className=""
                src={cpa}
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-12"
                src="https://static.youthop.com/uploads/sites/2/2020/04/bangladesh-govt-logo.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-14"
                src="https://i.ibb.co.com/mFWyHtq/aci-group-logo-BABDEC820-D-seeklogo-com.png"
                alt="ACI"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-12"
                src="https://i.ibb.co.com/m4HgjFy/radiant-pharmaceuticals-logo-107139-C3-BF-seeklogo-com.png"
                alt="Radiant"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className=""
                src="https://i.ibb.co.com/ZG6Jffh/healthcare-pharmaceuticals-1646306545.png"
                alt="Healthcare Phar. LTD"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-12"
                src="https://i.ibb.co.com/dcpGNNZ/download.png"
                alt="protirokkha kroy moha parishad"
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-3"
                src="https://i.ibb.co.com/jgCtd1r/download.png"
                alt="Beximco Phar."
              />
            </figure>
          </div>
        </div>
        <div className="">
          {/* card */}
          <div className="card bg-base-100 shadow-xl h-40 flex justify-center items-center">
            <figure>
              <img
                className="p-10"
                src="https://i.ibb.co.com/fCw1bCg/download.png"
                alt="Civil Aviation"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
