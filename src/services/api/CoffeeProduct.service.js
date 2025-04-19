import axios from 'axios'
const CoffeeProduct = async (signal, typeMenu) => {
  try {
    const coffeeApi = await axios.get(`https://api.sampleapis.com/coffee/${typeMenu}`, { signal })
    const response = coffeeApi
    return response.data
  }
  catch (error) { 
    console.error('Failed for fetching coffee data API:', error)
  }
}

export default CoffeeProduct

