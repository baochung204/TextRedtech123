import { axiosAPI } from 'src/api/axiosApi';

const url = 'redon/admin/ticket';

const overviewTicketApi = {
  getAllOverviewTicket: () => {
    return axiosAPI.get(`/${url}/overview-ticket`);
  },
  getAllTicketData: () => {
    return axiosAPI.get(`/${url}/list-ticket`);
  },
};

export default overviewTicketApi;
