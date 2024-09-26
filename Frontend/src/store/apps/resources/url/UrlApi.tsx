import instance from '../instance';

export const GetAllUrl = async () => {
  try {
    const response = await instance.get('/urls');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export const RemoveUrl = async (id: string) => {
//   try {
//     const response = await instance.delete(`/urls/${id}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
