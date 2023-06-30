import {createStore} from "redux"
import countReducer from "../reducers/CountReducers"
 const store = createStore (countReducer)
 // creatStore là hook khởi tạo Store để chứa các action 
 export default store