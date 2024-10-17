import { axiosAPI } from "../axiosApi"

const url = "api/v1/users"

const userApi = {
    getAllUser: () => {
        return axiosAPI.get(`/${url}`)
    }
}

export default userApi;