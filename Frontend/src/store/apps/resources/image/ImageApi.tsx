import instance from '../instance';

export const GetAllImage = async () => {
  try {
    const { data } = await instance.get('/images');
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

export const GetImageById = async (id: string) => {
  try {
    const { data } = await instance.get(`/images/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching image by ID:', error);
  }
};
export const RemoveImage = async (id: string) => {
  try {
    const { data } = await instance.delete(`/images/${id}`);
    return data;
  } catch (error) {
    console.error('Error deleting image:', error);
  }
};
