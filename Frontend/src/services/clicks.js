import axios from 'axios'
const baseUrl = '/api/clicks'

const addClick = async () => {
  const response = await axios.get(baseUrl + '/add')
  return response.data
}

export default { addClick }