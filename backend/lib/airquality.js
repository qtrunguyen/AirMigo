import axios from 'axios'

const ENDPOINT = 'https://airquality.googleapis.com/v1'
const GOOGLE_KEY = process.env.GOOGLE_AIR_QUALITY_KEY

export async function getCurrentAir(requestBody) {
    axios
        .post(`${ENDPOINT}/currentConditions:lookup?key=${GOOGLE_KEY}`, requestBody)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log("TRIED getCurrentAir(). Met with error:")
            console.log(err)
        })
}

export async function getFutureAir(requestBody) {

    axios
        .post(`${ENDPOINT}/forecast:lookup?key=${GOOGLE_KEY}`, requestBody)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log("TRIED getFutureAir(). Met with error:")
            console.log(err)
        })
}

export async function getPastAir(requestBody) {
    axios
        .post(`${ENDPOINT}/forecast:lookup?key=${GOOGLE_KEY}`, requestBody)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log("TRIED getPastAir(). Met with error:")
            console.log(err)
        })
}
