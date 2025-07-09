import { createSlice } from "@reduxjs/toolkit";


const TodoSplice = createSlice({
    name: "todo",

    initialState: {
        Task: []
    },
    reducers: {
        Addtask: (state, action) => {
            state.Task.push(action.payload);
        },
        del: (state, action) => {
            state.Task = state.Task.filter((key) => key.id !== action.payload.id);
        },
        complete:(state,action)=>{
            let idx = state.Task.findIndex((item) =>item.id == action.payload);

            if(idx != 1){
                if(state.Task[idx].status == "incomplete"){
                    state.Task[idx].status = "complete"
                }else{
                     state.Task[idx].status = "incomplete"
                }
            }
        },
        edit:(state,action)=>{
            for(let i=0; i<state.Task.length; ++i){
                
                if(state.Task[i].id == action.payload.id){
                    state.Task[i].work = action.payload.work; 
                }
            }        
        }
    }

})
export const { Addtask, del,complete,edit } = TodoSplice.actions;
export default TodoSplice.reducer;