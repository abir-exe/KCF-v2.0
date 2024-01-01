/* eslint-disable react/no-unescaped-entities */


const Distributors = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="text-4xl text-center bg-blue-50 w-1/3 mx-auto rounded-full mb-12 my-10 py-5 font-bold">
          DISTRIBUTOR
        </div>
        {/* timeline  */}
       <div className="grid grid-cols-3 gap-2 m-2 justify-center items-center">
        {/* cards */}
        <div className="card h-96 bg-base-100 shadow-xl">
  <figure><img className="h-40"  src="https://jsr.co.th/wp-content/uploads/2018/01/YAMAWA-logo.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">YAMAWA MFG. Co. Ltd.</h2>
    <p>Since the foundation of 1923, YAMAWA group has been studying and developing highest quality cutting tools (Taps, Dies, Center Drills and so on) to meet with daily progressing technical needs. After its foundation they have been doing some good works</p>
    <div className="card-actions justify-end">
      <a className="btn btn-outline  " href="https://www.yamawa.com/en/
">Visit Website</a>
    </div>
  </div>
</div>
        {/* cards */}
        <div className="card  h-96  bg-base-100 shadow-xl">
  <figure><img className="h-40" src="https://www.felisattiutensili.com/wp-content/uploads/2019/04/utensili-nachi-udine-pordenone.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">NACHI-FUJIKOSHI CORP</h2>
    <p>Nachi-Fujikoshi Corp. is a Japanese corporation known for its industrial robots, machining tools and systems and machine components. Nachi-Fujikoshi is listed on the Tokyo Stock Exchange and as of January 2014, comprises 50 companies.</p>
    <div className="card-actions justify-end">
    <a className="btn btn-outline  " href="https://www.nachi-fujikoshi.co.jp/eng/index.html

">Visit Website</a>
    </div>
  </div>
</div>
        {/* cards */}
        <div className="card  h-96  bg-base-100 shadow-xl">
  <figure><img className="h-40"  src="https://bslbatt.co.za/wp-content/uploads/2022/08/BSL-Icon.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">BSLBATT</h2>
    <p>BSLBATT is a professional lithium-ion battery manufacturer, including R&D and OEM services for more than 20 years. The company takes the development and production of the advanced series "BSLBATT" (best solution lithium battery) as its mission.
</p>
    <div className="card-actions justify-end">
    <a className="btn btn-outline  " href="https://www.bsl-battery.com/

">Visit Website</a>
    </div>
  </div>
</div>
       </div>
        </div>
    );
};

export default Distributors;