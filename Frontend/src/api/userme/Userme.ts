import { axiosAPI } from "../axiosApi"

const url = 'users/me'

const UserMeApi = {
    getUserMe: () => {
        return axiosAPI.get(`${url}`)
    }
}

export default UserMeApi