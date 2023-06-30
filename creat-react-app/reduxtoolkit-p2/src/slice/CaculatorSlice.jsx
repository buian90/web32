import { createSlice} from "@reduxjs/toolkit"

const caculatorSlice = createSlice({
      name : "counter", // name là tên của Slice
      initialState : {  // initialState là giá trị ban đầu của reducer
        count : 0
    },
        reducers : { // reducer là phần khai báo reducer
            // actionTang là tên của action đặt gì cũng đc
            actionTang: (state, action) => {
            state.count += action.payload
            // state.count là state giá trị ban đầu có count = 0 và cộng với action.payload mà payload mình để ở app.jsx là dispath(actionTang(1))
            },
            // actionGiam là tên của action đặt gì cũng đc
            actionGiam: (state, action) => {
                state.count -= action.payload
                
            } 
        }
    
})

// Export Action ra ( hiển thị action)
export const  {actionTang , actionGiam} = caculatorSlice.actions
// Export reducer ( hiển thị reducer)
export default caculatorSlice.reducer
// 2 export đều là cú pháp 
