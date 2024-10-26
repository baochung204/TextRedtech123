import { axiosAPI } from "src/api/axiosApi";


const DeleteResource = {
    deleteUrlResource: (id: number) => {
        return axiosAPI.delete(`/user-resources/urls/${id}/delete`)
    },
    deleteImageResource: (id: number[]) => {
        return axiosAPI.delete(`/user-resources/images/delete`, {
            data: id
        })
    }
}

export default DeleteResource