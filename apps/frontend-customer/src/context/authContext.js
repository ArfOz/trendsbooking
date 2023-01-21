import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [loginUser, setLoginUser] = useState();
    const [registerUser, setRegisterUser] = useState();
    const [registerErrors, setRegisterErrors] = useState();
    const [loginErrors, setLoginErrors] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    function postLogin(data) {
        setIsLoading(true);
        const options = {
            method: 'POST',
            url: 'http://localhost:3300/api/users/login',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
            data: data,
        };

        axios
            .request(options)
            .then(function (response) {
                setIsLoading(false);
                console.log(response.data);
                setLoginUser(response.data);
            })
            .catch(function (error) {
                console.error(error);
                setLoginErrors(error);
            });
    };
    function postRegister(data) {
        setRegisterErrors(null)
        setIsLoading(true);
        const options = {
            method: 'POST',
            url: 'http://localhost:3300/api/users/register',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
            data: data,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response);
                setRegisterUser(response.data);
                setIsLoading(false)
            })
            .catch(function (error) {
                console.log('error', error);
                setRegisterErrors(error);
            });
    };
    return {
        registerUser,
        loginUser,
        postLogin,
        postRegister,
        loginErrors,
        registerErrors,
        isLoading,
    };
}

