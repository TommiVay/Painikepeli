import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/clicks'

const addClick = async () => {
  const response = await axios.get(baseUrl + '/add')
  console.log(response.data)
}

export default {addClick}