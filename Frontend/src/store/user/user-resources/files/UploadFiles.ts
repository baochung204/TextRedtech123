import { createAsyncThunk } from '@reduxjs/toolkit';
import PostResourceUser from 'src/api/user/resources/PostResourceUser';

export const uploadFile = createAsyncThunk(
    'userResources/uploadFile',
    async (file: any, { rejectWithValue }) => {
        try {
            const response = await PostResourceUser.postFileResource(file);
            console.log('apiresult: ', response);

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);
