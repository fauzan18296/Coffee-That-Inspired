import axios from 'axios'
const CoffeeProduct = (callback, signal, typeMenu) => {
  axios.get(`https://api.sampleapis.com/coffee/${ typeMenu}`, { signal })
    .then((res) => {
   callback(res.data)
    })
    .catch((err) => {
    console.log(err.message)
  })
}

export default CoffeeProduct

