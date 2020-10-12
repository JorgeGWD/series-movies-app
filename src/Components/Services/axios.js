import axios from 'axios'

const instance = axios.create({
    baseURL: `https://run.mocky.io/v3/b3dc9e1b-165f-4648-ab73-1a75e82fd899`
})

export default instance