import { createAsyncThunk } from "@reduxjs/toolkit";
import DeleteResource from "src/api/user/resources/DeleteResourceUser";


export const DeleteResourceActionUrl = createAsyncThunk(
    'userResources/deleteUrl',
    async (id: number, { rejectWithValue }) => {
        try {
            const res = await DeleteResource.deleteUrlResource(id)
            console.log('apiresult: ', res);
            return res
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
)


export const DeleteResourceActionImage = createAsyncThunk(
    'userResources/deleteUrl',
    async (id: number[], { rejectWithValue }) => {
        try {
            const res = await DeleteResource.deleteImageResource(id)
            console.log('apiresult: ', res);
            return res
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
)