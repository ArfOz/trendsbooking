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



//

// Create service function
export const createService = async (newService) => {
  try {
    const response = await axios.post('https://localhost:3300/api/departments/addservice', newService);
    return response.data;
  } catch (error) {
    console.error('Error creating service:', error);
    throw error;
  }
};

// // Delete service function
// const deleteService = async (serviceId) => {
//   try {
//     const response = await axios.delete(`${DELETE_SERVICE_URL}/${serviceId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error deleting service:', error);
//     throw error;
//   }
// };

// // Edit service function
// const editService = async (serviceId, updatedService) => {
//   try {
//     const response = await axios.put(`${EDIT_SERVICE_URL}/${serviceId}`, updatedService);
//     return response.data;
//   } catch (error) {
//     console.error('Error editing service:', error);
//     throw error;
//   }
// };








// export const createServices = async (
//     ServiceName,
//     ServiceTimes,
//     Price,
//     Worker,
//     Prim,
// ) => {
//     try {
//         const response = await axios.post(
//             'http://localhost:3300/api/departments/addservice',
//             {
//                 ServiceName,
//                 ServiceTimes,
//                 Price,
//                 Worker,
//                 Prim,
//             },
//         );
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };
