import { axiosAPI } from 'src/api/axiosApi';
 export interface AdminTicket {
  ticketId: string;
  create_date: Date;
  messageTime: Date | null;
  rate: number;
  status: string;
  title: string;
  user_id: number;
  user_name: string;
  email: string;
  phone_number: string;
}
const url = 'redon/admin/ticket';

const overviewTicketApi = {
  getAllOverviewTicket: ( ) => {
    return axiosAPI.get(`/${url}/overview-ticket`);
  },
  getAllTicketData: (object: Partial<AdminTicket> = {}) => {
    const url = 'redon/admin/ticket';
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    const fullUrl = query ? `${url}?${query}` : url;
    return axiosAPI.get(`/${fullUrl}/list-ticket`);
  },
};

export default overviewTicketApi;
