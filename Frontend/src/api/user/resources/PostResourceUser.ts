import { axiosAPI } from "src/api/axiosApi";



export interface PropsForm {
    url: string,
    title: string,
    description: string,
}

const url = 'user-resources'

const PostResourceUser = {
    postFileResource: (data: any) => {
        return axiosAPI.post(`/${url}/files`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    },
    postUrlResource: (data: PropsForm[]) => {
        return axiosAPI.post(`/${url}/urls/add`, data)
    }
}

export default PostResourceUser