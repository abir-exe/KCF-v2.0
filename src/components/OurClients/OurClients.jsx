// import Marquee from "react-fast-marquee";
import cpa from "../../../public/images/cpatos.png"

const OurClients = () => {
  return (
    <div className="my-40">
      <div className="text-4xl text-center bg-blue-50 w-1/3 rounded-full m-auto my-16 py-5 font-bold">
        Our Clients
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
                src="https://upload.wikimedia.org/wikipedia/en/d/dc/Directorate_General_of_Defence_Purchase_logo.png"
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
      </div>
    </div>
  );
};

export default OurClients;
