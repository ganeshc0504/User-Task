import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser:(state,{payload})=>{
            return [...payload];
        },
        updateUser:(state,{payload})=>{
            const index = state.findIndex((user, i)=> user.id == payload.id );
            const user ={...payload};
            console.log("user",user);
            const arr = [...state]
            arr.splice(index,1,user);
            console.log("arr",arr);
            return arr;
        },
        deleteUser:(state,{payload})=>{
            const index = state.findIndex((user, i)=> user.id == payload.id );
            const arr = [...state]
            arr.splice(index,1);
            return arr;
        },
    },
});

export const { addUser,updateUser, deleteUser } = UserSlice.actions;
export const selectUsers = state => state.users;

export default UserSlice.reducer;


// setInitialUser(user)
//         if(initialUser) setUser({...user,...initialUser})