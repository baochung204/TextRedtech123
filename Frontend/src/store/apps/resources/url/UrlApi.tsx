import instance from '../instance';

export const GetAllUrl = async () => {
  const response = await instance.get('/url');
  return response.data;
};
