import { createAsyncThunk } from '@reduxjs/toolkit';
import PostResourceUser, { PropsForm } from 'src/api/user/resources/PostResourceUser';

export const uploadUrls = createAsyncThunk(
    'userResources/uploadUrl',
    async (urls: PropsForm[], { rejectWithValue }) => {
        try {
            const response = await PostResourceUser.postUrlResource(urls);
            console.log('apiresult: ', response);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);
