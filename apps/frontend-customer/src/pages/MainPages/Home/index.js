import React from 'react';

import { MainLayout } from '../../../layout';
import Navbar from '../../../components/Navbar/Navbar';
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

            <Footer/>
        </MainLayout>
    );
};

export default Home;
