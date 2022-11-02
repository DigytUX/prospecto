import axios from 'axios'

export const getBusinesses = async (category:string, location:string) => {
  const options = {
    method: 'POST',
    url: 'https://local-business-data.p.rapidapi.com/search',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '0c569bc259msh607acdabc330e72p169f7cjsnfc26f1a401c5',
      'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
    },
    data: '{"queries":["'+ category +' in '+ location +'"],"limit":20,"region":"us","language":"en"}'
  };

  axios.request(options).then(function (response) {
    console.log(response.data.data);
  }).catch(function (error) {
    console.error(error);
  });
}