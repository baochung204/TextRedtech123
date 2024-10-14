import instance from 'src/configs/axios';

export const GetAllPoints = async () => {
  try {
    const { data } = await instance.get('/points');
    return data;
  } catch (error) {
    console.error('Error fetching points', error);
  }
};
export const GetPointById = async (id: string) => {
  try {
    const { data } = await instance.get(`/points/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching points:', error);
  }
};
