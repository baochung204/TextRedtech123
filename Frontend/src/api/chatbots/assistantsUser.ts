import { axiosAPI } from "../axiosApi";


const url = 'chatbots'


const assisstantAPi = {
    getAllAssisstant: () => {
        return axiosAPI.get(`/${url}`);
    }
}


export default assisstantAPi