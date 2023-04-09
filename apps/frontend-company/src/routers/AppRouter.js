import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import {
    Login,
    Register,
    ResetPassword,
    Home,
    Shop,
    Dashboard,
    Randevu,
    Calısanlar,
    Services,
    NotFound404,
} from '../pages';

const AppRouter = () => {
    const [user, setUser] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/randevu" element={<Randevu />} />
                <Route path="/calısanlar" element={<Calısanlar />} />
                <Route path="/services" element={<Services />} />

                <Route
                    path="/profile"
                    element={<PublicRoute isAuth={user} redirectPath="/" />}
                >
                    <Route path="" element={<Home />} />
                </Route>

                <Route
                    path="/auth"
                    element={
                        <PrivateRoute isAuth={!user} redirectPath="/auth" />
                    }
                >
                    <Route path="" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                </Route>

                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
