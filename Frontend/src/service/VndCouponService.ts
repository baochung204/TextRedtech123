import axios from 'axios';
import ApiService from './ApiService';
import { FormCreateVndCoupon } from 'src/types/apps/vnd_coupon';

export default class VndCouponService {
  static async createVndCoupon(formCreateVndCoupon: FormCreateVndCoupon) {
    try {
      const response = await axios.post(
        `${ApiService.BASE_URL}/vnd-coupon/create-coupon`,
        formCreateVndCoupon,
        {
          headers: ApiService.getHeader(),
        },
      );
      return response.data;
    } catch (error: any) {
      // Xử lý lỗi
      console.error('Error create vnd_coupon:', error);
      return error.response.data;
    }
  }

  static async getOverviewVndCoupon() {
    try {
      const response = await axios.post(`${ApiService.BASE_URL}/vnd-coupon/overview`, {
        headers: ApiService.getHeader(),
      });
      return response.data;
    } catch (error: any) {
      // Xử lý lỗi
      console.error('Error create vnd_coupon:', error);
      return error.response.data;
    }
  }

  static async getRandonVndCoupon(type: string, point: number) {
    try {
      const response = await axios.get(`${ApiService.BASE_URL}/vnd-coupon/get-coupon`, {
        headers: ApiService.getHeader(),
        params: { type, point },
      });
      return response.data;
    } catch (error: any) {
      // Xử lý lỗi
      console.error('Error create vnd_coupon:', error);
      return error.response.data;
    }
  }

  static async getHistoryUsedVndCoupon(
    page_no: number,
    page_size: number,
    sort_by: string,
    sort_dir: string,
    search_key: string,
    begin: Date,
    end: Date,
  ) {
    // Chuyển đổi `begin` và `end` sang định dạng dd/MM/yyyy
    const formatOptions: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    const formattedBegin = begin.toLocaleDateString('en-GB', formatOptions);
    const formattedEnd = end.toLocaleDateString('en-GB', formatOptions);

    try {
      const response = await axios.get(`${ApiService.BASE_URL}/vnd-coupon/history-used-vndcoupon`, {
        headers: ApiService.getHeader(),
        params: {
          page_no,
          page_size,
          sort_by,
          sort_dir,
          search_key,
          begin: formattedBegin,
          end: formattedEnd,
        },
      });
      return response.data;
    } catch (error: any) {
      // Xử lý lỗi
      console.error('Error create vnd_coupon:', error);
      return error.response.data;
    }
  }
}
