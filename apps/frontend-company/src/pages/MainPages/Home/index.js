import React from 'react';

import { MainLayout } from '../../../layout';
import CompanyNavbar from '../../../components/Navbar/CompanyNavbar';
import Footer from '../../../components/Footer';
import {
    Chero,
    Gallery,
    TrendBiz,
    Toolset,
    Foundations,
    Software,
    MobileApplication,
    Questions,
} from './components';

const Home = () => {
    return (
        <MainLayout>
            <CompanyNavbar />

            <Chero />
            <Software />
            <Gallery />
            <TrendBiz />
            <Toolset />
            <Foundations/>
            <MobileApplication />
            <Questions />
            <Footer />
        </MainLayout>
    );
};

export default Home;
