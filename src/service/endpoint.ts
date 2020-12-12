import { apiCovid } from './api'


function getCovidSummary(): object {
  const response = apiCovid.get('/summary')
    .then((res) => {
        return res.data
    })
    .catch((error) => {
      return error
    })
    
  return response
}

export { getCovidSummary }