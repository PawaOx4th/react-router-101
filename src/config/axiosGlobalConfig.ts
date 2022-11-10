import axios from "axios"

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

http.interceptors.response.use((responseConfig) => {
  return responseConfig.data
})

export default http
