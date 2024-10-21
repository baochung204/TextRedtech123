import { axiosAPI } from "../axiosApi"

const url = "redon/admin/ticket"

const AdminTicketApi = {
    getAllTicket: () => {
        return axiosAPI.get(`${url}/list-ticket`)
    },
    OverViewTicket : () => {
        return axiosAPI.get(`${url}/overview-ticket`)
    }
}
export default AdminTicketApi