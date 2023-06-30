const Example2 = () => {
    const handleClick = (event) =>{
        alert ("xin chao" + event)
    }
    return (
       <>
       <h1>Xu ly su kien co tham so</h1>

       <button onClick={()=> handleClick("Lop web32")}>Click Me!!</button>
       </>
    )
}
export default Example2