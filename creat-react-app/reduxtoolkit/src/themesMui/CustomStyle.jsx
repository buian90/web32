import { makeStyles } from '@mui/styles';


const useStyle = makeStyles ({
  buttonBlack : {
    background: "black !important",
    marginRight: " 15px!important",
    color: "white!important"
  },
buttonViolet: {
    background: "violet !important",
    marginLeft: "15px !important",
    color: "white!important"
}
}) 
export default useStyle

// Custom style của 1 thành phần trong ứng dụng thông qua hook makeStyle của MUI
// buttonBlack buttonViolet là những className để chỉnh sửa các thành phần trong components
