   // b1 khai báo giá trị ban đầu
const initialState = {
    count : 0
}
 // b2 khai báo function reducer
  const countReducer = ( state = initialState, action) => {
//  console.log(state, 'state');
//   console.log(action, 'action');
  switch (action.type) {
    case "Tang":
        
        return{
            ...state, // sao chép lại state ban đầu
            count: state.count + 1 // cập nhật state thêm +1
 
        }
    case "Giam" :
        return {
            ...state, // sao chép lại state ban đầu
            count: state.count - 1 // cập nhật state giảm -1
        }
        default:
            return state
  }
//    return state 
  }
  export default countReducer
  // b3 khai báo store ... Tạo folder store... trong folder có file store.jsx
