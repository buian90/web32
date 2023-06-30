import { Button } from "@mui/material"
import useStyle from "../themesMui/CustomStyle";

const Caculator = () => {
  const count = 0;
  //classes = useStyle là để custom style
  const classes = useStyle()
  return (
    <>
     <h1>Caculator</h1>

    <Button variant="outlined" className={classes.buttonBlack}>Tăng +</Button>
    {count}
    <Button variant="outlined" className={classes.buttonViolet}>Giảm -</Button>
    </>
  )
}

export default Caculator