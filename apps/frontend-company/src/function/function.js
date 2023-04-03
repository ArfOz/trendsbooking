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

export const createService = async (
    ServiceName,
    ServiceTimes,
    Price,
    Worker,
    Prim,
) => {
    try {
        const response = await axios.post(
            'http://localhost:3300/api/departments/addservice',
            {
                ServiceName,
                ServiceTimes,
                Price,
                Worker,
                Prim,
            },
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
