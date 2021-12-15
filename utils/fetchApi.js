import axios from 'axios';

export const baseUrl = 'http://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    
headers: {
  'x-rapidapi-host': 'bayut.p.rapidapi.com',
  'x-rapidapi-key': '1be540452cmsh497e7d97dd6da43p15395ajsnea5a7a083a2f'
    }
  });

  return data;
}