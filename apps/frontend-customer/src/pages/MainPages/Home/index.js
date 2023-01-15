import React from 'react';

import { MainLayout } from '../../../layout';
import Navbar from '../../../components/Navbar/Navbar';
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
            <Navbar />
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

            {/* <FooterMain/> */}
        </MainLayout>
    );
};

export default Home;
