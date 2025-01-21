import axios from 'axios'
const CoffeeProduct = (callback) => {
  axios.get("https://fake-coffee-api.vercel.app/api")
    .then((res) => {
    callback(res)
    })
    .catch((err) => {
    callback(err.message)
  })
}

export default CoffeeProduct
