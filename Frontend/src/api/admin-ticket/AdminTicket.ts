import { axiosAPI } from "../axiosApi"

const url = "redon/admin/ticket"

const AdminTicketApi = {
    getAllTicket: () => {
        return axiosAPI.get(`${url}/list-ticket`)
    }
}
export default AdminTicketApi