import { CATEGORY_GET_ALL } from './types'
import { CATEGORY_API } from './../../components/utility/static'
import fetchFromApi from './fetch'

const fetchAllCategories = async () => {
  const url = `${CATEGORY_API}`

  const response = await fetchFromApi(url)

  return {
    type: CATEGORY_GET_ALL,
    payload: response
  }
}

export { fetchAllCategories }
