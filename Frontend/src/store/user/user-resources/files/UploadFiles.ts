import { createAsyncThunk } from '@reduxjs/toolkit';
import GetResourceUser from 'src/api/user/resources/PutResourceUser';

export const uploadFile = createAsyncThunk(
    'userResources/uploadFile',
    async (file: any, { rejectWithValue }) => {
        try {
            const response = await GetResourceUser.getFileRessource(file);
            console.log('apiresult: ', response);

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);
