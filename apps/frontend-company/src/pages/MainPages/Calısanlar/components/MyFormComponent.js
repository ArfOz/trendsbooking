import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const initialFormData = {
  DepartmentId: 0,
  FirstName: '',
  LastName: '',
  Phone: '',
  WorkTime: [
    {
      MorningStartAt: '',
      MorningEndAt: '',
      ShiftStart: '',
      ShiftEnd: '',
      NightStartAt: '',
      NightEndAt: '',
      Days: 0,
      Holiday: true,
    }
  ],
  Roles: 'WorkerBasic',
  Email: '',
  Password: ''
};

const MyFormComponent = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (index !== undefined) {
      const updatedWorkTime = [...formData.WorkTime];
      updatedWorkTime[index][name] = value;
      setFormData(prevData => ({
        ...prevData,
        WorkTime: updatedWorkTime,
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAddWorkTime = () => {
    setFormData(prevData => ({
      ...prevData,
      WorkTime: [
        ...prevData.WorkTime,
        {
          MorningStartAt: '',
          MorningEndAt: '',
          ShiftStart: '',
          ShiftEnd: '',
          NightStartAt: '',
          NightEndAt: '',
          Days: 0,
          Holiday: true,
        }
      ]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend'e formData'yı gönderme işlemlerini burada gerçekleştirin
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Department Id"
        name="DepartmentId"
        value={formData.DepartmentId}
        onChange={handleInputChange}
      />
      <br />
      <Box
            sx={{
                width: '95%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                m: 'auto',
                mt: 3,
            }}
        >
             <TextField
        label="isim"
        name="FirstName"
        value={formData.FirstName}
        onChange={handleInputChange}
        sx={{
          width: '49%',
      }}
      />
            <TextField
        label="soyisim"
        name="LastName"
        value={formData.LastName}
        onChange={handleInputChange}
        sx={{
          width: '49%',
      }}
      />
        </Box>
     
      <br />
      
      <br />
      <TextField
        label="Phone"
        name="Phone"
        value={formData.Phone}
        onChange={handleInputChange}
      />
      <br />
      {formData.WorkTime.map((workTime, index) => (
        <div key={index}>
          <TextField
            label="Morning Start At"
            name="MorningStartAt"
            value={workTime.MorningStartAt}
            onChange={(e) => handleInputChange(e, index)}
          />
          <br />
          <TextField
            label="Morning End At"
            name="MorningEndAt"
            value={workTime.MorningEndAt}
            onChange={(e) => handleInputChange(e, index)}
          />
          <br />
          <TextField
            label="Shift Start"
            name="ShiftStart"
            value={workTime.ShiftStart}
            onChange={(e) => handleInputChange(e, index)}
          />
          <br />
          <TextField
            label="Shift End"
            name="ShiftEnd"
            value={workTime.ShiftEnd}
            onChange={(e) => handleInputChange(e, index)}
          />
          <br />
          <TextField
            label="Night Start At"
            name="NightStartAt"
            value={workTime.NightStartAt}
            onChange={(e) => handleInputChange(e, index)}
          />
          <br />
          <TextField
            label="Night End At"
            name="NightEndAt"
            value={workTime.NightEndAt}
            onChange={(e) => handleInputChange(e, index)}
          />
          <br />
          <TextField
            label="Days"
            name="Days"
            value={workTime.Days}
            onChange={(e) => handleInputChange(e, index)}
          />
          <br />
          <TextField
            label="Holiday"
            name="Holiday"
            value={workTime.Holiday}
            onChange={(e) => handleInputChange(e, index)}
          />
          <br />
        </div>
      ))}
      {/* <Button variant="contained" onClick={handleAddWorkTime}>
        Alta Ekle
      </Button> */}
      <br />
      <TextField
        label="Roles"
        name="Roles"
        value={formData.Roles}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        label="Email"
        name="Email"
        value={formData.Email}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        label="Password"
        name="Password"
        value={formData.Password}
        onChange={handleInputChange}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Gönder
      </Button>
    </form>
  );
};

export default MyFormComponent;
