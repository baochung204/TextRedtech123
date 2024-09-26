import instance from '../instance';

export const GetAllImage = async () => {
  try {
    const response = await instance.get('/images');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const RemoveImage = async (id: string) => {
  try {
    const response = await instance.delete(`/images/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
