import axios from "axios";


export const denemeFunc = async(setDeneme)=>{
    setDeneme("deneme function.js")
}

export const postRegister = (data) => {

const options = {
  method: 'POST',
  url: 'http://localhost:3300/api/users/register',
  headers: {'Content-Type': 'application/json', accept: 'application/json'},
  data: data
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error('error',error);
});
}