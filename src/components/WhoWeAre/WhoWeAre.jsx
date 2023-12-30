import hakim from "../../../public/images/hakim.jpg"
import kenechi from "../../../public/images/tagawa.jpg"
import soft from "../../../public/images/soft.jpg"

const WhoWeAre = () => {
  return (
    <div id="wwa" className="mt-20 md:mt-0">
      <section className="mt-24 w-10/12 mx-auto">
        <div className="text-4xl text-center bg-blue-50 w-1/3 mx-auto rounded-full mb-12 py-5 font-bold">
          Who We Are
        </div>

        {/* <!-- card container  --> */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 px-5">
          <div className="rounded-xl card-compact  bg-base-200 shadow-xl">
            <figure>
              <img
                className=" h-80 w-full pb-6 rounded-t-xl"
                src={hakim}
                alt="Hakim Siddiki"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dr. S. M. A. Hakim Siddiki</h2>
              <h2 className="font-semibold">Director & Consultant</h2>
              <p>
                KCF Co. Ltd.
              </p>
            </div>
          </div>
          <div className="rounded-xl card-compact  bg-base-200 shadow-xl">
            <figure>
              <img
                className=" h-80 w-full pb-6 rounded-t-xl"
                src={kenechi}
                alt="Tagawa Daisuke"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tagawa Daisuke</h2>
              <h2 className="font-semibold">Consultant</h2>
              <p>KCF Japan</p>
            </div>
          </div>
          <div className=" rounded-xl card-compact  bg-base-200 shadow-xl">
            <figure>
              <img
                className=" h-80 w-full pb-6 rounded-t-xl"
                src={soft}
                alt="Nabi MD Mahmudun"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">MD Pallob</h2>
              <h2 className="font-semibold">Head of Business Planning and Development</h2>
              <p>
                KCF Co. Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
