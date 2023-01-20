import React from 'react';

import { MainLayout } from '../../../layout';
import CompanyNavbar from '../../../components/Navbar/CompanyNavbar';
import Footer from '../../../components/Footer';
import {
    Hero,
    Tabs,
    Highlights,
    AveragePrices,
    Happier,
    Cards,
    Software,
    OneClick,
    MobileApplication,
    Questions,
} from './components';

const Home = () => {
    return (
        <MainLayout>
           <CompanyNavbar/>
            <Hero />
            <Tabs />
            <Highlights />
            <AveragePrices />
            <Happier />
            <Cards />
            <Software />
            <OneClick />
            <MobileApplication />
            <Questions />

            <Footer/>
        </MainLayout>
    );
};

export default Home;
