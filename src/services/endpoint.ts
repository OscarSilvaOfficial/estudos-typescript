import { apiCovid } from './api'


async function getCovidSummary() {
  const response = apiCovid.get('/summary')
    .then((res:any) => {
        return res.data
    })
    .catch((error:any) => {
      return error
    })
  return await response
}

export { getCovidSummary }