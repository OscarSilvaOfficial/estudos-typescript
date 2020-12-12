import axios from 'axios'


export const apiCovid = axios.create({
  baseURL: 'https://api.covid19api.com/'
})
