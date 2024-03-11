import axios from "axios"
import conf from "./config"
export default async function (url) {
    try {
        const res = await axios.get(conf.serverUrl + url)
        return res.data.data.attributes
    } catch (error) {
        console.log(error)
        return false
    }
}