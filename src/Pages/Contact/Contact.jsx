/* eslint-disable react/no-unescaped-entities */

import NavbarElse from "../../components/Navbar/NavbarElse";


const Contact = () => {
  return (
    <div>
      <NavbarElse></NavbarElse>
      <div className="text-center mb-16">
      <div className="text-4xl text-center bg-blue-50 lg:w-1/3 w-full mx-auto rounded-full mt-10 py-5 font-bold">
          OUR LOCATIONS
        </div>
      </div >
      {/* timeline */}
      
      <div 
      className="px-5 lg:px-40 overflow-hidden">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li >
    <div className="timeline-middle text-xl">
      
    </div>
    <hr />
    <div className="timeline-start md:text-start mb-10">
    
      <time className="font-mono italic">Corporate Office:</time>
      <div className="text-lg font-black">KCF Co. Ltd. BD:</div>
      House 71, Road-6, West Kawlar Khilkhet, Dhaka-1229, Bangladesh
    </div>
    <hr/>
  </li>
  <li >
    <div className="timeline-middle text-xl">
      
    </div>
    <div className="timeline-start md:text-start mb-10">
      <time className="font-mono italic">Japan Office:</time>
      <div className="text-lg font-black">KCF Co. Ltd. Japan </div>
            (Seiken Medical Industry Co. Ltd.) <br />
            1-5-15 Nishitenma, Kita-ku, Osaka-shi, Osaka, Japan, 530-0047 <br />
            
            <br />
            Mobile : +81-90-3975-3625, +81-80-1890-4924  <br />
            Fax: 06-7504-4721
            <br />
            
            E-mail: h-siddiki@kcfjp.com, m-nabi@kcfjp.com
    </div>
    <hr/>
  </li>
  <li >
    <div className="timeline-middle text-xl">
      
    </div>
    <div className="timeline-start md:text-start mb-10">
      <time className="font-mono italic">Partner Company:</time>
      <div className="text-lg font-black">PROSERVE K.K.:</div>
       Kyoto-shi, Sakyo-ku, Takano, Higashihirakicho 1-7-6-301,Japan, 606-8107 <br />
            
    </div>
    <hr/>
  </li>
  <li >
    {/* <div className="timeline-middle text-xl">
      
    </div> */}
    <div className="timeline-start md:text-start mb-10">
      {/* <time className="font-mono italic">Partner Company:</time> */}
      <div className="text-lg font-black">NEXTGEN SOLUTION LTD.:</div>
      <span className="font-semibold"></span>  41a Maryland Road Maryland Road, London, England, E15 1JJ
            
    </div>
    <hr/>
  </li>
  
  
</ul>
      </div>
    </div>
  );
};

export default Contact;
