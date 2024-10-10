import instance from '../resources/instance';

export const GetAllVndCoupons = async () => {
  try {
    const { data } = await instance.get('/vnd_coupons');
    return data;
  } catch (error) {
    console.error('Error fetching Vnd Coupons', error);
  }
};
export const GetVndCouponById = async (id: string) => {
  try {
    const { data } = await instance.get(`/vnd_coupons/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching Vnd Coupons', error);
  }
};
