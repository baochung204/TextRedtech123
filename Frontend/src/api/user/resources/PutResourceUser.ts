import { axiosAPI } from "src/api/axiosApi";

const url = 'user-resources'

const GetResourceUser = {
    getFileRessource: (data: any) => {
        return axiosAPI.post(`/${url}/files`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
}

export default GetResourceUser