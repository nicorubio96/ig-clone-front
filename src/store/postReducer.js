import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import { createPostAsync, updatePostAsync } from '../async/post';
export const createPost=createAsyncThunk(
    'posts/createPost',
    async(formData,{ rejectWithValue })=>{
        try{
            const response = await createPostAsync(formData)
            return response
        }catch(err){
            rejectWithValue(err.message)
            
        }
     
    }
)

export const updatePost =createAsyncThunk(
    'posts/updatePost',
    async({UserId,comment},{rejectWithValue})=>{
        try{
            const response = await updatePostAsync(UserId,comment)
            return response

        }catch(err){

            rejectWithValue(err.message)
            
        }

    }
)


const initialState={
    post:[],
    status:'',
    error:''
}
const postSlice = createSlice({
    name:'posts',
    initialState,
    extraReducers:(builder)=>{                
        builder
            .addCase(createPost.pending, (state) => {
                state.status = 'cargando';
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.status = 'éxito';
                state.post.push(action.payload);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.status = 'fallido';
                state.error = action.error.message;
            });

            builder
            .addCase(updatePost.pending, (state) => {
                state.status = 'cargando';
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.status = 'éxito';

                state.posts = state.posts.map((post) =>
                post.UserId === action.payload.UserId ? { ...post, comment: action.payload.comment } : post
        );
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.status = 'fallido';
                state.error = action.error.message;
            });    

    }

})



export default postSlice.reducer;