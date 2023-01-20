import React from 'react';

import { MainLayout } from '../../../layout';
import CompanyNavbar from '../../../components/Navbar/CompanyNavbar';
import Footer from '../../../components/Footer';
import {
    Hero,
    
    
    Highlights,
    AveragePrices,
    Happier,
    Cards,
    Software,
    OneClick,
    MobileApplication,
    Questions,
} from './components';
import Chero from './components/Chero';

const Home = () => {
    return (
        <MainLayout>
           <CompanyNavbar/>
            {/* <Hero /> */}
          <Chero/>
         
            {/* <Highlights /> */}
            {/* <AveragePrices /> */}
            {/* <Happier /> */}
            {/* <Cards /> */}
            <Software />
            <OneClick />
            <MobileApplication />
            <Questions />

            <Footer/>
        </MainLayout>
    );
};

export default Home;
