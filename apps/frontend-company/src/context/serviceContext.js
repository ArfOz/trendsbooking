import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ServiceContext = createContext();

const ServiceContextProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.log(error));
  }, []);

  const addService = (newService) => {
    axios.post('/api/services', newService)
      .then(response => setServices([...services, response.data]))
      .catch(error => console.log(error));
  };

  const editService = (id, updatedService) => {
    axios.put(`/api/services/${id}`, updatedService)
      .then(response => {
        const updatedServices = services.map(service => service.id === id ? response.data : service);
        setServices(updatedServices);
      })
      .catch(error => console.log(error));
  };

  const deleteService = (id) => {
    axios.delete(`/api/services/${id}`)
      .then(() => {
        const updatedServices = services.filter(service => service.id !== id);
        setServices(updatedServices);
      })
      .catch(error => console.log(error));
  };

  return (
    <ServiceContext.Provider value={{ services, addService, editService, deleteService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceContextProvider };
