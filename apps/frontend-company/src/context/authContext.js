import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const authContext = createContext();
const serviceContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

export const useService = () => {
  return useContext(serviceContext)
}

function useProvideAuth() {
    const [loginUser, setLoginUser] = useState();
    const [registerUser, setRegisterUser] = useState();
    const [registerErrors, setRegisterErrors] = useState();
    const [loginErrors, setLoginErrors] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [sendCodeData, setSendCodeData] = useState();
    const [sendCodeErrors, setSendCodeErrors] = useState();
    const [verifyCodeData, setVerifyCodeData] = useState();
    const [verifyCodeErrors, setVerifyCodeErrors] = useState();

    function postLogin(data) {
        setLoginErrors(null);
        setIsLoading(true);
        const options = {
            method: 'POST',
            url: 'http://localhost:3300/api/companyusers/login',
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
                setIsLoading(false);
                console.error(error);
                setLoginErrors(error);
            });
    }
    function postRegister(data) {
        setRegisterErrors(null);
        setIsLoading(true);
        const options = {
            method: 'POST',
            url: 'http://localhost:3300/api/companyusers/register',
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
                setIsLoading(false);
            })
            .catch(function (error) {
                setIsLoading(false);
                console.log('error', error);
                setRegisterErrors(error);
            });
    }
    function verifyCode(data) {
        setVerifyCodeErrors(null);
        setIsLoading(true);
        const options = {
            method: 'POST',
            url: 'http://localhost:3300/api/companyusers/verifycode',
            headers: { 'Content-Type': 'application/json' },
            data: data,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setVerifyCodeData(response.data);
                setIsLoading(false);
            })
            .catch(function (error) {
                console.error(error);
                setVerifyCodeErrors(error);
                setIsLoading(false);
            });
    }

    function sendCode(data) {
        setSendCodeErrors(null);
        setIsLoading(true);
        const options = {
            method: 'POST',
            url: 'http://localhost:3300/api/companyusers/sendcode',
            headers: { 'Content-Type': 'application/json' },
            data: data,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log('authContext', response.data);
                setSendCodeData(response.data);
                setIsLoading(false);
            })
            .catch(function (error) {
                console.error(error);
                setSendCodeErrors(error);
                setIsLoading(false);
            });
    }

    function postServices(data) {
      setRegisterErrors(null);
      setIsLoading(true);
      const options = {
          method: 'POST',
          url: 'http://localhost:3300/api/companyusers/services',
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
              setIsLoading(false);
          })
          .catch(function (error) {
              setIsLoading(false);
              console.log('error', error);
              setRegisterErrors(error);
          });
  }

    return {
        registerUser,
        loginUser,
        postLogin,
        postRegister,
        verifyCode,
        sendCode,
        loginErrors,
        registerErrors,
        isLoading,
        verifyCodeData,
        sendCodeData,
        sendCodeErrors,
        verifyCodeErrors,
        postServices
    };
}
