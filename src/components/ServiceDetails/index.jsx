import React from 'react';
import TitleSection from "../common/TitleSection";
import Footer from "../HomeOne/Footer";
import MainSection from "./MainSection";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    return (
       <InnerPageWrapper>
           <TitleSection title="service details" teams={[{name:'home',path:'/'},{name:'service details',path:'/service-details'}]}/>
           <MainSection/>
           <Footer/>
       </InnerPageWrapper>
    );
}

export default Index;