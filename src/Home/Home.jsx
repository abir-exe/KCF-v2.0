import ContactUs from "../components/ContactUs/ContactUs";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

import OurClients from "../components/OurClients/OurClients";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import SuccessStory from "../components/SuccessStory/SuccessStory";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import WhatWeOffer from "../components/WhatWeOffer/WhatWeOffer";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";


const Home = () => {
    return (
        <div id="home" >
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Header></Header>
            <WhatWeDo></WhatWeDo>
            <WhatWeOffer></WhatWeOffer>
            <SuccessStory></SuccessStory>
            <WhoWeAre></WhoWeAre>
            <OurClients></OurClients>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;