import axios from 'axios'

export class Http {
  constructor () {
    this.axios = axios
  }

  get (url, params) {
    return params ? axios.get(url, { params }) : axios.get(url)
  }

  getAll (arrUrls) {
    return new Promise((resolve, reject) => {
      axios.all(arrUrls.map((url) => {
        return axios.get(url)
      })).then(axios.spread((...args) => {
        resolve(args)
      }))
    })
  }

  delete (url) {
    return axios.delete(url)
  }

  post (url, data) {
    return axios.post(url, data)
  }

  put (url, data) {
    return axios.put(url, data)
  }

  putAll (arrUrls) {
    this.setAuthorization()
    return new Promise((resolve, reject) => {
      axios.all(arrUrls.map(({ url, params }) => {
        return params ? axios.put(url, params) : axios.put(url)
      })).then(axios.spread((...args) => {
        resolve(args)
      }))
    })
  }
}
