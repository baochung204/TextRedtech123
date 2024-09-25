import axios from "axios";
const API_URL = 'http://localhost:9999'
export const GetFiles = async (setData: any) => {
    try {
        const res = await axios.get(`${API_URL}/files`)
        setData(res.data)
        console.log(res.data);
    } catch (error) {
        console.error(error);
    }
}