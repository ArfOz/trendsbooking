import axios from 'axios';

export const denemeFunc = async (setDeneme) => {
    setDeneme('deneme function.js');
};

export const postRegister = (data, setError, setResponse) => {
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
            setResponse(response.data);
        })
        .catch(function (error) {
            console.log('error', error);
            setError(error.response.data.details.toString());
        });
};

export const postLogin = (data,setDataLogin) => {

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
            console.log(response.data);
            setDataLogin(response.data)
        })
        .catch(function (error) {
            console.error(error);
        });
};
