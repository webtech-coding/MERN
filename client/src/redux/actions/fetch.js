import axios from 'axios'

const fetchFromApi = async (api, method = 'get', data = {}) => {
  let response = ''

  if (method === 'get') {
    response = await axios.get(api)
  } else {
    response = await axios.post(api)
  }

  return response
}

export default fetchFromApi
