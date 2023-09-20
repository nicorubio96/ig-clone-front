import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'
import { login, register } from '../async/auth'


// First, create the thunk
export const fetchLogin = createAsyncThunk(
  'users/login',
  async (email,password) => {
    try{
        const response = await login(email,password)
    
    return response
    }
    catch(err){
      console.log(err)
   

    }
  
  }
)

export const fetchRegister= createAsyncThunk(
  'users/register',
  async({username,firstName,lastName,password})=>{
    try{
      const response  = await register(username,firstName,lastName,password)
      console.log(response)
      return response

    }
    catch(err){
        console.log(err)
    }
  }
)



const initialState = {
  users: [],
  status:'pending',
  error: null
  
} 

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
   logOut(state){
      state.users =[],
      state.status= 'logout'
    }
  },
  extraReducers: (builder) => {

    builder.addCase(fetchLogin.pending,(state,action)=>{
      state.users=[]
      state.status='pending'
    })
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      // Add user to the state array
      state.users = (action.payload)
      state.status='Authenticate'
    
    
    })

    builder.addCase(fetchLogin.rejected,(state,action)=>{
      state.error = action.payload
      state.status= 'not-Authenticated'
      state.users = []
    })

    builder.addCase(fetchRegister.fulfilled,(state,action)=>{
      state.users.push(action.payload)
      state.status= 'registered'
    })
  },
})

// Later, dispatch the thunk as needed in the app
export const  {logOut} = usersSlice.actions
export default usersSlice.reducer;

