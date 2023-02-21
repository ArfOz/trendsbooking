import React from 'react';

import { MainLayout } from '../../../layout';

import {
    Navbar,
    ViewMyStore,

} from './components';

const Dashbord = () => {
    return (
        <MainLayout>
            <Navbar />
            <ViewMyStore/>
        </MainLayout>
    );
};

export default Dashbord;
