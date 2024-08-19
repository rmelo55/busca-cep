import axios from 'axios'

const apiLepuLepu = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

export default apiLepuLepu

// base url é algo que não vai mudar, url base na api